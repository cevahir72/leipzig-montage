import { type NextRequest } from "next/server";
import { Product } from "@/lib/models";
import { verifyAuth } from "@/lib/middleware/auth";

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return Response.json({ error: "CSV dosyası gerekli" }, { status: 400 });
  }

  const text = await file.text();
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

  const urls = lines
    .map((l) => l.replace(/^["']|["']$/g, "").trim())
    .filter((u) => u.length > 0);

  if (urls.length === 0) {
    return Response.json({ error: "CSV'de geçerli URL bulunamadı" }, { status: 400 });
  }

  const products = await Product.findAll({ order: [["id", "ASC"]] });
  let updated = 0;

  for (let i = 0; i < Math.min(urls.length, products.length); i++) {
    await products[i].update({ imageUrl: urls[i] });
    updated++;
  }

  return Response.json({
    message: `${updated} ürünün imageUrl alanı güncellendi`,
    total_products: products.length,
    total_urls: urls.length,
  });
}
