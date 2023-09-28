import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const id = request.nextUrl.pathname.split('/')[3];
  
  try {
    const prompt = await prisma.prompt.findUnique({
      where: { id },
    });

    return NextResponse.json(prompt);
  }  catch (error) {
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}