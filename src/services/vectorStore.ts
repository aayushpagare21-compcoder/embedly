import { env } from "./config";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { PineconeStore } from "@langchain/pinecone";
import logger from "./logger";
import { getPineconeClient } from "./pineconeClient";
import { TaskType } from "@google/generative-ai";

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: "Personal information embeddings",
  apiKey: env.GEMINI_API_KEY,
});

export async function embedAndStoreDocs(
  // @ts-expect-error docs type error
  docs: Document<Record<string, unknown>>[],
  botId: string,
) {
  /*create and store the embeddings in the vectorStore*/
  try {
    const pineconeClient = await getPineconeClient();

    const index = pineconeClient.index(env.PINECONE_INDEX_NAME);

    // Ensure each document has user-specific metadata
    const docsWithMetadata = docs.map((doc) => ({
      ...doc,
      metadata: {
        ...doc.metadata,
        botId,
      },
    }));

    //embed the text documents
    await PineconeStore.fromDocuments(docsWithMetadata, embeddings, {
      pineconeIndex: index,
      textKey: "text",
    });
  } catch (error) {
    logger.error(error);
    throw new Error("Failed to load your docs !");
  }
}

// Returns vector-store handle to be used a retrievers on langchains
export async function getVectorStore() {
  try {
    const pineconeClient = await getPineconeClient();
    const index = pineconeClient.index(env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      textKey: "text",
    });

    return vectorStore;
  } catch (error) {
    logger.error("error ", error);
    throw new Error("Something went wrong while getting vector store !");
  }
}
