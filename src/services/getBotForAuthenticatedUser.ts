import { prisma } from "./prisma";

async function getBotForAuthenticatedUser(userId: string) {
  const bot = await prisma.bot.findMany({ where: { userId } });
  return bot ? bot[0] : null;
}

export default getBotForAuthenticatedUser;
