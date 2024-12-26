const ChatBotWelcomeHeading = ({ chatBotName }: { chatBotName: string }) => {
  return (
    <h1 className="text-center text-[2rem] mt-auto max-w-[250px]">
      {" "}
      Hello {`I'm`} <span className="text-[#A64D79]"> {chatBotName.split(' ')[0]} </span>{" "}
    </h1>
  );
};

export default ChatBotWelcomeHeading;
