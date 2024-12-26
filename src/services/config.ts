import z from "zod";
const envSchema = z.object({
  GEMINI_API_KEY: z.string().trim().min(1, "GEMINI_API_KEY is required"),
  PINECONE_API_KEY: z.string().trim().min(1, "PINECONE_API_KEY is required"),
  PINECONE_INDEX_NAME: z
    .string()
    .trim()
    .min(1, "PINECONE_INDEX_NAME is required"),
  AUTH_GOOGLE_ID: z.string().trim().min(1, "AUTH_GOOGLE_ID is required"),
  AUTH_GOOGLE_SECRET: z
    .string()
    .trim()
    .min(1, "AUTH_GOOGLE_SECRET is required"),
  NEXTAUTH_SECRET: z.string().trim().min(1, "NEXTAUTH_SECRET is required"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().trim().min(1, "DATABASE_URL is required"),
  UPSTASH_REDIS_URL: z.string().optional(),
  UPSTASH_REDIS_TOKEN: z.string().optional(),
});

export const env = envSchema.parse(process.env);
