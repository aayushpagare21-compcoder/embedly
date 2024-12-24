"use client";
import React, { useState } from "react";
import PageWrapper from "emebedly/components/containers/PageWrapper";
import ChatbotInput from "./ChatbotInput";
import ChatBotWelcomeHeading from "./ChatbotWelcomeHeading";
import EmbedlyNavbar from "../embedly/EmbedlyNavbar";
import { useAsyncFn } from "react-use";

interface ChatbotProps {
  chatBotName?: string;
  botId: string;
}

enum Sender {
  BOT = "BOT",
  HUMAN = "HUMAN",
}

interface Messages {
  sender: Sender;
  text: string;
  error?: boolean;
}

const ChatbotClient: React.FC<ChatbotProps> = ({
  chatBotName = "Bot",
  botId,
}) => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [question, setQuestion] = useState("");

  const [{ loading, error }, getAnswer] = useAsyncFn(
    async (questionAsked: string) => {
      const response = await fetch(`/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionAsked, botId }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }
      const data = await response.json();
      return data.answer;
    }
  );

  const handleSendMessage = async () => {
    if (question.trim()) {
      setMessages((prev) => [
        ...prev,
        { sender: Sender.HUMAN, text: question.trim() },
        { sender: Sender.BOT, text: "" },
      ]);
      setQuestion("");

      try {
        const answer = await getAnswer(question);
        setMessages((prev) =>
          prev.map((msg, index) =>
            index === prev.length - 1
              ? { sender: Sender.BOT, text: answer.trim() }
              : msg
          )
        );
      } catch {
        setMessages((prev) =>
          prev.map((msg, index) =>
            index === prev.length - 1
              ? {
                  sender: Sender.BOT,
                  text: "Failed to load AI response.",
                  error: true,
                }
              : msg
          )
        );
      }
    }
  };

  return (
    <PageWrapper>
      <EmbedlyNavbar />
      {!messages.length && (
        <div className="mt-16 h-full">
          <ChatBotWelcomeHeading chatBotName={chatBotName} />
        </div>
      )}

      <div className="flex flex-col h-[calc(100vh-80px)] w-full md:max-w-3xl mx-auto p-4">
        {/* Chat messages */}
        <div className="flex-1 flex flex-col gap-4 overflow-auto pb-16">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === Sender.HUMAN
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[250px] md:max-w-md text-md px-4 py-3 mx-2 rounded-lg shadow-md ${
                  message.sender === Sender.HUMAN
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                    : error
                    ? "bg-red-500 text-white"
                    : "bg-gradient-to-r from-pink-300 to-pink-500 text-black"
                }`}
              >
                {loading && index === messages.length - 1 ? (
                  <div className="flex justify-start h-full">
                    <div className="animate-pulse bg-gradient-to-r from-pink-300 to-pink-500 text-black">
                      typing...
                    </div>
                  </div>
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 bg-[#1A1A1D] py-4">
          <ChatbotInput
            chatBotName={chatBotName}
            setInput={setQuestion}
            input={question}
            onClickSend={handleSendMessage}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ChatbotClient;
