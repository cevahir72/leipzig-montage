import { type NextRequest } from "next/server";
import { Product } from "@/lib/models";
import { verifyCodeAuth } from "@/lib/middleware/auth";

export async function POST(request: NextRequest) {
  if (!verifyCodeAuth(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { product_list } = await request.json();

  if (!Array.isArray(product_list) || product_list.length === 0) {
    return Response.json({ error: "product_list array required" }, { status: 400 });
  }

  let totalMin = 0;
  let totalMax = 0;
  const calculated: { productId: string; minCost: number | null; maxCost: number | null }[] = [];
  const notCalculated: string[] = [];

  for (const pid of product_list) {
    const product = await Product.findOne({ where: { productId: String(pid) } });

    if (product) {
      totalMin += product.minCost || 0;
      totalMax += product.maxCost || 0;
      calculated.push({ productId: pid, minCost: product.minCost, maxCost: product.maxCost });
    } else {
      notCalculated.push(pid);
    }
  }

  return Response.json({
    total_min: totalMin,
    total_max: totalMax,
    calculated_products: calculated,
    not_calculated_ids: notCalculated,
  });
}
