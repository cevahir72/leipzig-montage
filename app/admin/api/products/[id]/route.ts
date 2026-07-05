import { type NextRequest } from "next/server";
import { Product } from "@/lib/models";
import { verifyAuth } from "@/lib/middleware/auth";
import { validateProduct } from "@/lib/middleware/validateProduct";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = verifyAuth(request);
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const validationError = validateProduct(body);
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const product = await Product.findByPk(id);
  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  await product.update(body);
  return Response.json(product);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = verifyAuth(request);
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const product = await Product.findByPk(id);
  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  await product.destroy();
  return new Response(null, { status: 204 });
}
