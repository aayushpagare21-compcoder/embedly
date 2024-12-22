import { getAuthUser } from "emebedly/app/server/services/getAuthUser";
import logger from "emebedly/app/server/services/logger";
import { getChunksFromUploadedTextFile } from "emebedly/app/server/services/textLoader";
import { embedAndStoreDocs } from "emebedly/app/server/services/vectorStore";
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

    // training file
    const formData = await req.formData();
    const trainingFile = formData.get("training-file") as File;
    await saveOnPinecone(trainingFile, user.id);

    return NextResponse.json({
      status: 200,
    });
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

const saveOnPinecone = async (file: File, userId: string) => {
  try {
    logger.info("Preparing chunks from PDF files");
    const docs = await getChunksFromUploadedTextFile(file);
    logger.info(`Loading ${docs.length} chunks into pinecone...`);

    await embedAndStoreDocs(docs, userId);
    logger.info("Data embedded and stored in pine-cone successfully.");
  } catch (error) {
    console.error("saveOnPinecone failed ", error);
  }
};
