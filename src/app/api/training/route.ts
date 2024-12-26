import { getAuthUser } from "emebedme/services/getAuthUser";
import getBotForAuthenticatedUser from "emebedme/services/getBotForAuthenticatedUser";
import logger from "emebedme/services/logger";
import { prisma } from "emebedme/services/prisma";
import { getChunksFromUploadedTextFile } from "emebedme/services/textLoader";
import { embedAndStoreDocs } from "emebedme/services/vectorStore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Authenticated user id
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json(
        {
          error: "You need to be authenticated to perform this action.",
        },
        {
          status: 401,
        },
      );
    }

    const bot = await getBotForAuthenticatedUser(user.id);

    if (bot) {
      return NextResponse.json(
        {
          error: "You have already created a bot.",
        },
        {
          status: 409,
        },
      );
    }

    const createdBot = await prisma.bot.create({
      data: {
        userId: user.id,
      },
    });

    // training file
    const formData = await req.formData();
    const trainingFile = formData.get("training-file") as File;
    await saveOnPinecone(trainingFile, createdBot.id);

    return NextResponse.json(
      { botId: createdBot.id },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Internal server error ", error);
    return NextResponse.json(
      {
        error: "Error: Something went wrong. Try again!",
      },
      {
        status: 500,
      },
    );
  }
}

const saveOnPinecone = async (file: File, botId: string) => {
  try {
    logger.info("Preparing chunks from PDF files");
    const docs = await getChunksFromUploadedTextFile(file);
    logger.info(`Loading ${docs.length} chunks into pinecone...`);

    await embedAndStoreDocs(docs, botId);
    logger.info("Data embedded and stored in pine-cone successfully.");
  } catch (error) {
    console.error("saveOnPinecone failed ", error);
  }
};
