import React, { useRef } from "react";

interface CreateChatbotFormProps {
  chatBotWelcomeMessage: string;
  setChatBotWelcomeMessage: (message: string) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  botMessageColor: string;
  setBotMessageColor: (color: string) => void;
  botMessageBackgroundColor: string;
  setBotMessageBackgroundColor: (color: string) => void;
  userMessageColor: string;
  setUserMessageColor: (color: string) => void;
  userMessageBackgroundColor: string;
  setUserMessageBackgroundColor: (color: string) => void;
  inputBackgroundColor: string;
  setInputBackgroundColor: (color: string) => void;
  inputColor: string;
  setInputColor: (color: string) => void;
  chatBotPlaceholderText: string;
  setChatBotPlaceholderText: (text: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  loading: boolean;
  handleSubmit: () => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  feedback?: string;
  value?: { botId?: string };
}

const ColorInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => (
  <label className="text-sm text-white">
    {label}
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full p-4 border border-gray shadow-xl rounded bg-transparent"
    />
  </label>
);

const CreateChatbotForm: React.FC<CreateChatbotFormProps> = ({
  chatBotWelcomeMessage,
  setChatBotWelcomeMessage,
  bgColor,
  setBgColor,
  botMessageColor,
  setBotMessageColor,
  botMessageBackgroundColor,
  setBotMessageBackgroundColor,
  userMessageColor,
  setUserMessageColor,
  userMessageBackgroundColor,
  setUserMessageBackgroundColor,
  inputBackgroundColor,
  setInputBackgroundColor,
  inputColor,
  setInputColor,
  chatBotPlaceholderText,
  setChatBotPlaceholderText,
  file,
  loading,
  handleSubmit,
  handleFileUpload,
  feedback,
  value,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <label className="text-sm text-white">
        Chatbot Welcome Message
        <input
          type="text"
          value={chatBotWelcomeMessage}
          onChange={(e) => setChatBotWelcomeMessage(e.target.value)}
          placeholder="Hey, How can I help you today?"
          className="mt-1 text-white w-full p-4 border border-gray shadow-xl rounded bg-transparent"
        />
      </label>

      <ColorInput
        label="Chatbot Background Color"
        value={bgColor}
        onChange={setBgColor}
      />
      <ColorInput
        label="Bot Message Color"
        value={botMessageColor}
        onChange={setBotMessageColor}
      />
      <ColorInput
        label="Bot Message Background Color"
        value={botMessageBackgroundColor}
        onChange={setBotMessageBackgroundColor}
      />
      <ColorInput
        label="User Message Color"
        value={userMessageColor}
        onChange={setUserMessageColor}
      />
      <ColorInput
        label="User Message Background Color"
        value={userMessageBackgroundColor}
        onChange={setUserMessageBackgroundColor}
      />
      <ColorInput
        label="Input Background Color"
        value={inputBackgroundColor}
        onChange={setInputBackgroundColor}
      />
      <ColorInput
        label="Input Text Color"
        value={inputColor}
        onChange={setInputColor}
      />

      <label className="text-sm text-white">
        Input Placeholder Text
        <input
          value={chatBotPlaceholderText}
          onChange={(e) => setChatBotPlaceholderText(e.target.value)}
          className="mt-1 w-full p-4 border border-gray shadow-xl rounded bg-transparent"
        />
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full p-2 border border-gray shadow-xl rounded bg-transparent text-white hover:bg-gray-700 transition-colors"
        disabled={loading}
      >
        {file ? file.name : "Select Training File"}
      </button>

      <button
        onClick={handleSubmit}
        className="rounded-full w-full px-4 py-2 text-sm sm:text-base bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-all disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      {feedback && (
        <div className="text-center text-sm md:text-base text-white">
          {feedback}
        </div>
      )}

      {value?.botId && (
        <a
          href={`/embed/${value.botId}`}
          className="text-pink-500 underline hover:text-pink-400 transition-colors"
        >
          View Your Chatbot →
        </a>
      )}
    </div>
  );
};

export default CreateChatbotForm;
