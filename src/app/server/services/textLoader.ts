import type { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import logger from "./logger";
import { TextLoader } from "langchain/document_loaders/fs/text";

export async function getChunksFromUploadedTextFile(
  textFile: File,
): Promise<Document<Record<string, unknown>>[]> {
  try {
    const textLoader = new TextLoader(textFile);
    const docs = await textLoader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const chunkedDocs = await textSplitter.splitDocuments(docs);

    return chunkedDocs;
  } catch (error) {
    logger.error(`Error loading Text file ${error}`);
    throw new Error("Error loading text file");
  }
}
