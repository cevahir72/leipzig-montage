import { type NextRequest } from "next/server";
import { Product, User } from "@/lib/models";
import { verifyAuth } from "@/lib/middleware/auth";

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const userId = formData.get("userId") as string | null;

  if (!file) {
    return Response.json({ error: "Dosya gerekli" }, { status: 400 });
  }

  if (!userId) {
    return Response.json({ error: "userId gerekli" }, { status: 400 });
  }

  const user = await User.findByPk(parseInt(userId, 10));
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const XLSX = await import("xlsx");
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet) as Record<string, unknown>[];

  const products = rows.map((row) => ({
    productId: String(row.product_id ?? ""),
    imageUrl: (row.image_url as string) ?? null,
    name: String(row.name ?? ""),
    minCost: row.min_cost ? parseFloat(row.min_cost as string) : null,
    maxCost: row.max_cost ? parseFloat(row.max_cost as string) : null,
    userId: parseInt(userId, 10),
  }));

  const created = await Product.bulkCreate(products);
  return Response.json(
    { message: `${created.length} ürün yüklendi` },
    { status: 201 }
  );
}
