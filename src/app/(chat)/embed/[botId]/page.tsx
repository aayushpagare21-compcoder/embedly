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
  return (
    <ChatbotClient chatBotName={bot?.user.name ?? undefined} botId={botId} />
  );
}
