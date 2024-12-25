"use client";
import Example from "emebedme/components/landing/Example";
import { useState } from "react";

const thingsToInclude = [
  "Your basic information such as name, gender, pronouns, where are you from.",
  "Your academic details such as degree, college, university, cgpa.",
  "Your professional work experience, including current and past roles, industries, and key responsibilities",
  "Details about your projects, highlighting goals, technologies used, outcomes, and any unique contributions",
  "Your technical skills and proficiencies, such as programming languages, tools, or frameworks",
  "Your hobbies and personal interests, to add a human touch to your chatbot",
  "Awards, honors, or recognitions you've received, showcasing your accomplishments",
  "Your professional goals and aspirations, providing insight into your career direction",
  "Links to your portfolio, LinkedIn profile, or other professional networks",
  "Testimonials or feedback from colleagues, mentors, or clients, if available",
  "Your availability for collaborations or consultations, if applicable",
  "Your favorite quotes or philosophies that inspire your work or personal life",
  "Services you provide",
];

const thingsToNotInclude = [
  "Sensitive personal information like your address, phone number, or bank details",
  "Confidential company or client data",
  "Any inappropriate or offensive content",
  "Information you do not want to be shared publicly",
  "Excessive or irrelevant details that do not contribute to the chatbot's purpose",
  "Highly technical jargon without context (unless essential)",
  "Duplicate or repetitive content",
];

export default function Instructions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "Things to Include", content: thingsToInclude },
    { title: "Things to Not Include", content: thingsToNotInclude },
    { title: "Example", content: [] },
  ];

  return (
    <div className="flex flex-col gap-4 h-[500px] w-[500px] overflow-auto">
      <div className="text-xl text-blue-600"> {`FAQ's...`} </div>
      <div className="text-sm md:text-base text-left">
        {sections.map((section, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <button
              className="w-full text-left font-bold focus:outline-none"
              onClick={() => toggleIndex(index)}
            >
              {section.title}
            </button>
            {openIndex === index && index !== 2 && (
              <ul className="p-4 list-inside list-decimal">
                {section.content.map((item, idx) => (
                  <li className="mb-4" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {openIndex === index && index === 2 && <Example />}
          </div>
        ))}
      </div>
      <em className="text-gray-500">
        The more detailed and relevant information you provide, the better the
        chatbot will perform.
      </em>
    </div>
  );
}
