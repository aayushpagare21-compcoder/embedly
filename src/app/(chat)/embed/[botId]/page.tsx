import ChatbotClient from "emebedme/components/chatbot_client/Chatbot";
import { prisma } from "emebedme/services/prisma";

export default async function Chatbot({
  params,
}: {
  params: Promise<{ botId: string }>;
}) {
  const botId = (await params).botId;

  const bot = await prisma.bot.findUnique({
    where: { id: botId },
    include: { user: true },
  });

  if (!bot) {
    return null;
  }

  return (
    <ChatbotClient
      botId={bot.id}
      chatBotBackgroundColor={bot.backgroundColor}
      chatBotMessageBackgroundColor={bot.botMessageBackgroundColor}
      chatBotMessageColor={bot.botMessageTextColor}
      chatBotPlaceholderText={bot.placeholderText}
      chatBotWelcomeMessage={bot.welcomeMessage}
      inputBg={bot.inputBackgroundColor}
      inputColor={bot.inputTextColor}
      preview={false}
      userMessageBackgroundColor={bot.userMessageBackgroundColor}
      userMessageColor={bot.userMessageTextColor}
    />
  );
}
