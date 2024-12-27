"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAsyncFn } from "react-use";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChatbotInput from "./ChatbotInput";

// Types
interface ChatbotProps {
  chatBotWelcomeMessage: string;
  chatBotBackgroundColor: string;
  chatBotMessageBackgroundColor: string;
  chatBotMessageColor: string;
  userMessageBackgroundColor: string;
  userMessageColor: string;
  chatBotPlaceholderText: string;
  preview: boolean;
  botId: string;
  inputBg: string;
  inputColor: string;
}

enum Sender {
  BOT = "BOT",
  HUMAN = "HUMAN",
}

interface Message {
  sender: Sender;
  text: string;
  error?: boolean;
}

interface ChatResponse {
  answer: string;
}

const ChatbotClient: React.FC<ChatbotProps> = ({
  chatBotWelcomeMessage,
  chatBotBackgroundColor,
  chatBotMessageBackgroundColor,
  chatBotMessageColor,
  userMessageBackgroundColor,
  userMessageColor,
  chatBotPlaceholderText,
  preview,
  botId,
  inputBg,
  inputColor,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: Sender.BOT,
      text: chatBotWelcomeMessage,
    },
  ]);

  const [question, setQuestion] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preview) {
      setMessages([
        {
          sender: Sender.BOT,
          text: chatBotWelcomeMessage,
        },
        {
          sender: Sender.HUMAN,
          text: "I am human.",
        },
      ]);
    }
  }, [chatBotWelcomeMessage, preview]);

  // API call
  const [{ loading }, getAnswer] = useAsyncFn(
    async (questionAsked: string) => {
      const response = await fetch(`/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionAsked, botId }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch AI response: ${response.statusText}`);
      }

      const data: ChatResponse = await response.json();
      return data.answer;
    },
    [botId],
  );

  // Message handlers
  const handleSendMessage = async () => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    // Add user message and temporary bot message
    setMessages((prev) => [
      ...prev,
      { sender: Sender.HUMAN, text: trimmedQuestion },
      { sender: Sender.BOT, text: "" },
    ]);
    setQuestion("");

    try {
      const answer = await getAnswer(trimmedQuestion);
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1 ? { ...msg, text: answer.trim() } : msg,
        ),
      );
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? {
                ...msg,
                text: "Failed to load AI response. Please try again.",
                error: true,
              }
            : msg,
        ),
      );
      console.error("Error fetching AI response:", error);
    }
  };

  // Render message content
  const renderMessageContent = (message: Message, isLastMessage: boolean) => {
    if (loading && isLastMessage && message.sender === Sender.BOT) {
      return (
        <div className="flex justify-start">
          <div
            className="animate-pulse"
            style={{
              backgroundColor: chatBotMessageBackgroundColor,
              color: chatBotMessageColor,
            }}
          >
            typing...
          </div>
        </div>
      );
    }

    return message.sender === Sender.BOT ? (
      <div className="flex flex-col gap-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.text}
        </ReactMarkdown>
        <em
          className="text-[0.8rem]"
          style={{ color: chatBotMessageColor, opacity: 0.5 }}
        >
          powered by embedme
        </em>
      </div>
    ) : (
      message.text
    );
  };

  return (
    <div
      style={{ backgroundColor: chatBotBackgroundColor }}
      className="h-[80%] w-full lg:max-w-lg shadow-xl rounded-lg p-4"
    >
      <div ref={chatContainerRef} className="flex flex-col h-full py-4">
        {/* Chat messages */}
        <div className="flex flex-col gap-4 overflow-auto">
          {messages.map((message, index) => (
            <div
              key={`${message.text}-${index}`}
              className={`flex ${
                message.sender === Sender.HUMAN
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`md:max-w-[80%] text-md px-4 py-3 mx-2 rounded-lg shadow-md ${
                  message.error ? "border-red-500 border" : ""
                }`}
                style={{
                  backgroundColor:
                    message.sender === Sender.BOT
                      ? chatBotMessageBackgroundColor
                      : userMessageBackgroundColor,
                  color:
                    message.sender === Sender.BOT
                      ? chatBotMessageColor
                      : userMessageColor,
                }}
              >
                {renderMessageContent(message, index === messages.length - 1)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div
          className={`${
            !preview ? "sticky" : "relative"
          } bottom-0 p-4 bg-transparent mt-auto`}
        >
          <ChatbotInput
            chatBotPlaceholderText={chatBotPlaceholderText}
            setInput={setQuestion}
            input={question}
            onClickSend={handleSendMessage}
            inputBg={inputBg}
            inputColor={inputColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotClient;
