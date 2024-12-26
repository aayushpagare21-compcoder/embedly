"use client";
import React, { useRef, useState } from "react";

const EmbedMeUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); 
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
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

    setIsUploading(true);
    setFeedback(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-text-file", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setFeedback(result.message);
      } else {
        setFeedback(result.message || "Upload failed.");
      }
    } catch (error) {
      setFeedback("An error occurred while uploading the file.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center mt-4">
      <div className="flex flex-col items-center gap-2 w-[60vw] md:w-full">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {isUploading ? "Uploading..." : "Only .txt files allowed"}
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
          disabled={isUploading}
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
        <div className="text-center text-sm md:text-base text-red-600 dark:text-red-400">
          {feedback}
        </div>
      )}
    </div>
  );
};

export default EmbedMeUpload;
