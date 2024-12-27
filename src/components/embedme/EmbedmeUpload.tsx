"use client";

import React, { useState } from "react";
import { useAsyncFn } from "react-use";
import Chatbot from "../chatbot_client/Chatbot";
import CreateChatbotForm from "./CreateChatbotForm";

// Types remain the same
interface ChatbotConfig {
  file: File;
  chatBotWelcomeMessage: string;
  bgColor: string;
  botMessageBackgroundColor: string;
  botMessageColor: string;
  userMessageBackgroundColor: string;
  userMessageColor: string;
  chatBotPlaceholderText: string;
  inputBackgroundColor: string;
  inputColor: string;
}

interface TrainingResponse {
  error?: string;
  botId?: string;
}

// API function remains the same
async function startTraining(data: ChatbotConfig): Promise<TrainingResponse> {
  const formData = new FormData();
  formData.append("training-file", data.file);
  formData.append("chatBotWelcomeMessage", data.chatBotWelcomeMessage);
  formData.append("bgColor", data.bgColor);
  formData.append("botMessageBackgroundColor", data.botMessageBackgroundColor);
  formData.append("botMessageColor", data.botMessageColor);
  formData.append(
    "userMessageBackgroundColor",
    data.userMessageBackgroundColor,
  );
  formData.append("userMessageColor", data.userMessageColor);
  formData.append("chatBotPlaceholderText", data.chatBotPlaceholderText);
  formData.append("inputBackgroundColor", data.inputBackgroundColor);
  formData.append("inputColor", data.inputColor);

  const response = await fetch("/api/training", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

const EmbedMeUpload: React.FC = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  // States remain the same
  const [chatBotWelcomeMessage, setChatBotWelcomeMessage] = useState(
    "Hey, How can I help you today?",
  );
  const [bgColor, setBgColor] = useState("#ffffff");
  const [botMessageBackgroundColor, setBotMessageBackgroundColor] =
    useState("#f0f0f0");
  const [botMessageColor, setBotMessageColor] = useState("#000000");
  const [userMessageBackgroundColor, setUserMessageBackgroundColor] =
    useState("#e3f2fd");
  const [userMessageColor, setUserMessageColor] = useState("#000000");
  const [chatBotPlaceholderText, setChatBotPlaceholderText] = useState(
    "Type your message here...",
  );
  const [inputBackgroundColor, setInputBackgroundColor] = useState("#ffffff");
  const [inputColor, setInputColor] = useState("#000000");
  const [file, setFile] = useState<File | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const [{ loading, value }, startTrainingFn] = useAsyncFn(startTraining);

  // Handlers remain the same
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = async () => {
    if (!file) {
      setFeedback("Please select a training file.");
      return;
    }

    setFeedback("Processing...");
    try {
      const config: ChatbotConfig = {
        file,
        chatBotWelcomeMessage,
        bgColor,
        botMessageBackgroundColor,
        botMessageColor,
        userMessageBackgroundColor,
        userMessageColor,
        chatBotPlaceholderText,
        inputBackgroundColor,
        inputColor,
      };

      await startTrainingFn(config);
      setFeedback("Chatbot setup successfully!");
    } catch (err) {
      console.error("Error:", err);
      setFeedback("An error occurred while setting up the chatbot.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Preview Toggle */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsPreviewVisible(!isPreviewVisible)}
          className="bg-foreground text-background px-4 py-2 rounded-full shadow-lg"
        >
          {isPreviewVisible ? "Hide Preview" : "Show Preview"}
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen gap-8">
        {/* Configuration Panel - Always visible on desktop, conditionally visible on mobile when preview is hidden */}
        <div className={`${isPreviewVisible ? "hidden" : "block"} lg:block`}>
          <div className="flex flex-col gap-4 w-full lg:w-[80%] p-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200">
              Set up your chatbot
            </h1>
            <CreateChatbotForm
              bgColor={bgColor}
              botMessageBackgroundColor={botMessageBackgroundColor}
              botMessageColor={botMessageColor}
              chatBotPlaceholderText={chatBotPlaceholderText}
              chatBotWelcomeMessage={chatBotWelcomeMessage}
              file={file}
              handleFileUpload={handleFileUpload}
              handleSubmit={handleSubmit}
              inputBackgroundColor={inputBackgroundColor}
              inputColor={inputColor}
              userMessageBackgroundColor={userMessageBackgroundColor}
              loading={loading}
              setBgColor={setBgColor}
              setBotMessageBackgroundColor={setBotMessageBackgroundColor}
              setBotMessageColor={setBotMessageColor}
              setChatBotPlaceholderText={setChatBotPlaceholderText}
              setChatBotWelcomeMessage={setChatBotWelcomeMessage}
              setFile={setFile}
              setInputBackgroundColor={setInputBackgroundColor}
              setInputColor={setInputColor}
              setUserMessageBackgroundColor={setUserMessageBackgroundColor}
              setUserMessageColor={setUserMessageColor}
              userMessageColor={userMessageColor}
              feedback={feedback ?? undefined}
              value={value}
            />
          </div>
        </div>

        {/* Chatbot Preview - Always visible on desktop, conditionally visible on mobile when preview is shown */}
        <div
          className={`
            ${isPreviewVisible ? "block" : "hidden"} 
            lg:block 
            h-[500px]            
          `}
        >
          <Chatbot
            botId="preview"
            chatBotBackgroundColor={bgColor}
            chatBotMessageBackgroundColor={botMessageBackgroundColor}
            chatBotMessageColor={botMessageColor}
            chatBotPlaceholderText={chatBotPlaceholderText}
            chatBotWelcomeMessage={chatBotWelcomeMessage}
            preview={true}
            userMessageBackgroundColor={userMessageBackgroundColor}
            userMessageColor={userMessageColor}
            inputBg={inputBackgroundColor}
            inputColor={inputColor}
          />
        </div>
      </div>
    </div>
  );
};

export default EmbedMeUpload;
