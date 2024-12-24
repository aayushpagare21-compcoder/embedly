const ChatBotWelcomeHeading = ({ chatBotName }: { chatBotName: string }) => {
  return (
    <h1 className="text-center text-[2rem] mt-auto">
      {" "}
      Hello {`I'm`} <span className="text-[#A64D79]"> {chatBotName} </span>{" "}
    </h1>
  );
};

export default ChatBotWelcomeHeading;
