import { type NextRequest } from "next/server";
import { Product, User } from "@/lib/models";
import { verifyAuth } from "@/lib/middleware/auth";
import { validateProduct } from "@/lib/middleware/validateProduct";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);
  const allowed = [10, 20, 50, 100];
  const safeLimit = allowed.includes(limit) ? limit : 10;

  const { count, rows } = await Product.findAndCountAll({
    include: ["user"],
    limit: safeLimit,
    offset,
    order: [["id", "ASC"]],
  });

  return Response.json({ data: rows, total: count, limit: safeLimit, offset });
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const validationError = validateProduct(body);
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const user = await User.findByPk(body.userId);
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const product = await Product.create(body);
  return Response.json(product, { status: 201 });
}
