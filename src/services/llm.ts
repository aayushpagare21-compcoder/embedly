import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { env } from "./config";

export const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  apiKey: env.GEMINI_API_KEY,
  topP: 1,
});
