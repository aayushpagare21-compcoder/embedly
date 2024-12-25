import { getVectorStore } from "emebedly/services/vectorStore";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { NextRequest, NextResponse } from "next/server";
import { model } from "emebedly/services/llm";
import { PromptTemplate } from "@langchain/core/prompts";
import { QA_TEMPLATE } from "emebedly/services/propmtTemplate";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question = body.question;
    const botId = body.botId;
    if (!question) {
      return NextResponse.json(
        {
          error: "Question is required.",
        },
        {
          status: 400,
        },
      );
    }

    const pineconeVectorStore = await getVectorStore();
    const retriever = pineconeVectorStore.asRetriever({
      k: 2, // Retrieve 2 most relevant documents
      filter: {
        userId: botId,
      },
    });

    // Create a chain to combine retrieved documents
    const combineDocsChain = await createStuffDocumentsChain({
      llm: model,
      prompt: PromptTemplate.fromTemplate(QA_TEMPLATE),
    });

    // Create the retrieval chain
    const retrievalChain = await createRetrievalChain({
      retriever,
      combineDocsChain,
    });

    // Execute the chain
    const response = await retrievalChain.invoke({
      input: question,
    });

    // Return the answer
    return NextResponse.json({
      answer: response.answer,
    });
  } catch (error) {
    console.error("Error processing question:", error);
    return NextResponse.json(
      {
        error: "An error occurred while processing your question.",
      },
      {
        status: 500,
      },
    );
  }
}
