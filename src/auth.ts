import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "emebedme/services/prisma";
import NextAuth from "next-auth";
import { env } from "emebedme/services/config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID! as string,
      clientSecret: env.AUTH_GOOGLE_SECRET! as string,
    }),
  ],
});
