import z from "zod";
const envSchema = z.object({
  GEMINI_API_KEY: z.string().trim().min(1),
  PINECONE_API_KEY: z.string().trim().min(1),
  PINECONE_INDEX_NAME: z.string().trim().min(1),
  // AUTH_GOOGLE_ID: z.string().trim().min(1),
  // AUTH_GOOGLE_SECRET: z.string().trim().min(1),
});

export const env = envSchema.parse(process.env);
