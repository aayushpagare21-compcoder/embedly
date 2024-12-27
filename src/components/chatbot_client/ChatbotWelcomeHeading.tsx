const ChatBotWelcomeHeading = ({
  chatBotName,
  spanColor,
}: {
  chatBotName: string;
  spanColor: string;
}) => {
  return (
    <h1 className="text-center text-[2rem] mt-auto max-w-[250px]">
      {" "}
      Hey {`I'm`}{" "}
      <span style={{ color: spanColor }}>{chatBotName.split(" ")[0]} </span>
    </h1>
  );
};

export default ChatBotWelcomeHeading;
