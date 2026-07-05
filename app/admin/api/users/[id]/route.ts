import { type NextRequest } from "next/server";
import { User, Product } from "@/lib/models";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await User.findByPk(id, { include: ["products"] });
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }
  return Response.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const user = await User.findByPk(id);
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  await user.update(body);
  return Response.json(user);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const user = await User.findByPk(id);
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  await Product.destroy({ where: { userId: user.id } });
  await user.destroy();
  return new Response(null, { status: 204 });
}
