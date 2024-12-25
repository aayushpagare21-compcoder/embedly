import SendIcon from "../icons/SendIcon";
import React, { useRef } from "react";

const ChatbotInput = ({
  chatBotName,
  onClickSend,
  setInput,
  input,
}: {
  chatBotName: string;
  onClickSend: () => void;
  setInput: (value: string) => void;
  input: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);

    // Adjust the height of the textarea dynamically
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto to calculate the new height
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120, // Max height in pixels (customizable)
      )}px`;
    }
  };

  return (
    <div className="flex items-center mt-auto relative bg-[#3D3D40] p-4 rounded-lg shadow-md">
      <textarea
        ref={textareaRef}
        placeholder={`Ask ${chatBotName}`}
        value={input}
        onChange={handleInputChange}
        className="w-full max-h-32 overflow-y-auto rounded-full bg-[#3D3D40] text-white placeholder-gray-400 border-none focus:outline-none transition-opacity opacity-90 hover:opacity-100 resize-none"
        rows={1}
      />
      <button
        onClick={onClickSend}
        className="flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 hover:cursor-pointer rounded-full hover:bg-slate-500 w-8 h-8"
      >
        <SendIcon />
      </button>
    </div>
  );
};

export default ChatbotInput;
