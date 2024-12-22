import { auth } from "emebedly/app/auth";
import { prisma } from "./prisma";

export const getAuthUser = async () => {
  const session = await auth();

  if (!session) return null;

  const email = session?.user?.email;

  const user = await prisma.user.findUnique({ where: { email } });

  return user;
};
