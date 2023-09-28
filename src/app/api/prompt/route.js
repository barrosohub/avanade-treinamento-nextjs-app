import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const prompts = await prisma.prompt.findMany();
    return new NextResponse(JSON.stringify(prompts));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error fetching prompts" }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();
  const { title, content } = body;

  if (!title || !content) {
    return new NextResponse(
      JSON.stringify({ error: "Both title and content are required" }),
      { status: 400 }
    );
  }

  try {
    const newPrompt = await prisma.prompt.create({
      data: { title, content },
    });

    return new NextResponse(JSON.stringify(newPrompt), {
      status: 201
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error creating prompt" }),
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const body = await request.json();
  const { id, title, content } = body;

  if (!id || !title || !content) {
    return new NextResponse(
      JSON.stringify({ error: "All fields are required" }),
      { status: 400 }
    );
  }

  try {
    const updatedPrompt = await prisma.prompt.update({
      where: { id },
      data: { title, content }
    });

    return new NextResponse(JSON.stringify(updatedPrompt));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error updating prompt" }),
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const body = await request.json();
  const { id } = body;

  if (!id) {
    return new NextResponse(
      JSON.stringify({ error: "Prompt ID is required" }),
      { status: 400 }
    );
  }

  try {
    const deletedPrompt = await prisma.prompt.delete({ where: { id } });
    return new NextResponse(JSON.stringify(deletedPrompt));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error deleting prompt" }),
      { status: 500 }
    );
  }
}