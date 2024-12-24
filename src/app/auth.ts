import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "emebedly/services/prisma";
import NextAuth from "next-auth";
import { env } from "emebedly/services/config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID! as string,
      clientSecret: env.AUTH_GOOGLE_SECRET! as string,
    }),
  ],
});
