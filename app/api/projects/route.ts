import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { projectSchema } from "../../projectSchemas"; // Adjust the path as needed
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  // Check if the user is authenticated
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  // Parse the request body
  const body = await request.json();

  // Validate the request body against the project schema
  const validation = projectSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  // Create a new project using Prisma
  const newProject = await prisma.project.create({
    data: {
      name: body.name,
      description: body.description,
      ownerId: session.user.id, // Assuming the session contains user ID
    },
  });

  // Return the newly created project
  return NextResponse.json(newProject, { status: 201 });
}
