import React from "react";

interface EmbedmeLogoProps {
  text?: string; // The text to display in the logo
  colors?: string[]; // Array of colors for each character
  variant: "navbar" | "landing"; // Size options
  gap?: string; // Gap between characters
  defaultColor?: string; // Default color if colors array is shorter than the text
}

const EmbedmeLogo: React.FC<EmbedmeLogoProps> = ({
  text = "EmbedME",
  variant,
  colors = [
    "text-pink-400",
    "text-pink-400",
    "text-pink-500",
    "text-pink-500",
    "text-pink-600",
    "text-blue-600",
    "text-blue-600",
  ],
  gap = "gap-0",
}) => {
  const sizeClasses = {
    navbar: "text-[1.5rem]",
    landing: "text-[2.7rem] md:text-[3.5rem] leading-none -tracking-[1px]",
  };

  return (
    <>
      <div className={`flex ${gap}`}>
        {text.split("").map((char, index) => {
          const color = colors[index];
          return (
            <div key={index} className={`${sizeClasses[variant]} ${color}`}>
              {char}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EmbedmeLogo;
