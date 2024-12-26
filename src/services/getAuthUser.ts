import { auth } from "emebedme/auth";
import { prisma } from "./prisma";

export const getAuthUser = async () => {
  const session = await auth();

  if (!session) return null;

  const email = session?.user?.email ?? undefined;

  const user = await prisma.user.findUnique({ where: { email } });

  return user;
};
