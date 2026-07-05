import { type NextRequest } from "next/server";
import { User, Product } from "@/lib/models";

export async function GET() {
  const users = await User.findAll({ include: ["products"] });
  return Response.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await User.create(body);
  return Response.json(user, { status: 201 });
}
