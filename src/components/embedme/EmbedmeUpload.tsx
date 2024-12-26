"use client";
import React, { useRef, useState } from "react";
import { useAsyncFn } from "react-use";

async function startTraining(file: File) {
  const formData = new FormData();
  formData.append("training-file", file);
  const response = await fetch("/api/training", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result;
}

const EmbedMeUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const [{ loading, value }, fileUpload] = useAsyncFn(startTraining);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      setFeedback("No file selected.");
      return;
    }
    if (file.type !== "text/plain") {
      setFeedback("Only .txt files are allowed.");
      return;
    }
    setFeedback(null);
    const result = await fileUpload(file);

    if (result.error) {
      setFeedback(result.error);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full items-center mt-4">
      <div className="flex flex-col items-center gap-2 w-[60vw] md:w-full">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {loading ? "Uploading..." : "Only .txt files allowed"}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="hidden"
        />
        <button
          onClick={handleButtonClick}
          className="rounded-full w-[60vw] md:w-full px-4 py-2 text-sm sm:text-base bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-all"
          disabled={loading}
        >
          Select File
        </button>
      </div>
      <a
        href="/instructions"
        className="rounded-full w-[60vw] md:w-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      >
        Read instructions
      </a>
      {feedback && (
        <div className="text-center text-sm md:text-base">{feedback}</div>
      )}
      {value && value.botId && (
        <a href={`/embed/${value.botId}`} className="text-pink-500 underline">
          Check your bot
        </a>
      )}
    </div>
  );
};

export default EmbedMeUpload;
