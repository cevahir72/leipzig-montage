export function validateProduct(body: Record<string, unknown>) {
  const { productId, name, minCost, maxCost } = body;
  const errors: string[] = [];

  if (!productId && productId !== 0) errors.push('productId required');
  if (!name) errors.push('name required');
  if (minCost === undefined || minCost === null || minCost === '') errors.push('minCost required');
  if (maxCost === undefined || maxCost === null || maxCost === '') errors.push('maxCost required');

  return errors.length > 0 ? errors.join(', ') : null;
}
