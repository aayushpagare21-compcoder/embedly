import ChatbotClient from "emebedly/components/chatbot_client/Chatbot";
import { prisma } from "emebedly/services/prisma";

export default async function Chatbot({
  params,
}: {
  params: Promise<{ botId: string }>;
}) {
  const botId = (await params).botId;

  const user = await prisma.user.findUnique({
    where: { id: botId },
  });
  return <ChatbotClient chatBotName={user?.name ?? undefined} botId={botId} />;
}
