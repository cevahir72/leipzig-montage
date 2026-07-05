"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  productId: string;
  name: string;
  minCost: number | null;
  maxCost: number | null;
  imageUrl: string | null;
  userId: number;
}

interface PaginatedResponse {
  data: Product[];
  total: number;
  limit: number;
  offset: number;
}

const API = "/admin/api/products";
const LIMITS = [10, 20, 50, 100];

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    minCost: "",
    maxCost: "",
    imageUrl: "",
    userId: "1",
  });
  const [saving, setSaving] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<{ url: string; x: number; y: number } | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvStatus, setCsvStatus] = useState("");
  const [csvLoading, setCsvLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      router.push("/admin");
      return;
    }
    setToken(t);
  }, [router]);

  const fetchProducts = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API}?limit=${limit}&offset=${offset}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data: PaginatedResponse = await res.json();
      if (!res.ok) throw new Error("Failed to fetch");
      setProducts(data.data);
      setTotal(data.total);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  }, [token, limit, offset]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/admin");
  };

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  const openCreateForm = () => {
    setEditingProduct(null);
    setFormData({
      productId: "",
      name: "",
      minCost: "",
      maxCost: "",
      imageUrl: "",
      userId: "1",
    });
    setShowForm(true);
  };

  const openEditForm = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      productId: product.productId,
      name: product.name,
      minCost: product.minCost?.toString() || "",
      maxCost: product.maxCost?.toString() || "",
      imageUrl: product.imageUrl || "",
      userId: product.userId.toString(),
    });
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setSaving(true);
    setError("");

    const body: Record<string, unknown> = {
      productId: formData.productId,
      name: formData.name,
    };
    if (formData.minCost) body.minCost = parseFloat(formData.minCost);
    if (formData.maxCost) body.maxCost = parseFloat(formData.maxCost);
    if (formData.imageUrl) body.imageUrl = formData.imageUrl;
    if (!editingProduct) body.userId = parseInt(formData.userId);

    try {
      const url = editingProduct
        ? `${API}/${editingProduct.id}`
        : API;
      const method = editingProduct ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }

      setShowForm(false);
      fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!token || !confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Delete failed");
      fetchProducts();
    } catch {
      setError("Failed to delete product");
    }
  };

  const handleCsvUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!csvFile || !token) return;

    setCsvLoading(true);
    setCsvStatus("");

    try {
      const formData = new FormData();
      formData.append("file", csvFile);

      const res = await fetch("/admin/api/products/update-images", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setCsvStatus(`Hata: ${data.error}`);
      } else {
        setCsvStatus(data.message);
        setCsvFile(null);
        if (fileRef.current) fileRef.current.value = "";
        fetchProducts();
      }
    } catch {
      setCsvStatus("Yükleme hatası");
    } finally {
      setCsvLoading(false);
    }
  };

  if (!token) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-0 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-1.png" alt="Logo" className="h-8 w-auto brightness-0 invert" />
            <span className="font-headline-md text-headline-md font-bold">
              Admin Panel
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-on-primary/10 hover:bg-on-primary/20 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-0 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Products
            </h2>
            <p className="text-secondary text-sm mt-1">{total} total products</p>
          </div>
          <button
            onClick={openCreateForm}
            className="bg-primary text-on-primary px-6 h-12 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            New Product
          </button>
        </div>

        {error && (
          <div className="bg-error-container text-error px-4 py-3 mb-6 text-sm">
            {error}
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-surface w-full max-w-lg mx-4 p-8 border border-outline-variant max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  {editingProduct ? "Edit Product" : "New Product"}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-on-surface-variant hover:text-primary"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-caps text-label-caps text-secondary uppercase">
                    Product ID
                  </label>
                  <input
                    type="text"
                    value={formData.productId}
                    onChange={(e) =>
                      setFormData({ ...formData, productId: e.target.value })
                    }
                    className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-caps text-label-caps text-secondary uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-caps text-label-caps text-secondary uppercase">
                      Min Cost
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.minCost}
                      onChange={(e) =>
                        setFormData({ ...formData, minCost: e.target.value })
                      }
                      className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-caps text-label-caps text-secondary uppercase">
                      Max Cost
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.maxCost}
                      onChange={(e) =>
                        setFormData({ ...formData, maxCost: e.target.value })
                      }
                      className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-caps text-label-caps text-secondary uppercase">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
                  />
                </div>

                {!editingProduct && (
                  <div className="flex flex-col gap-1">
                    <label className="font-label-caps text-label-caps text-secondary uppercase">
                      User ID
                    </label>
                    <input
                      type="number"
                      value={formData.userId}
                      onChange={(e) =>
                        setFormData({ ...formData, userId: e.target.value })
                      }
                      className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
                      required
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 bg-primary text-on-primary h-12 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {saving
                      ? "Saving..."
                      : editingProduct
                        ? "Update"
                        : "Create"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 h-12 font-bold uppercase tracking-widest border border-outline-variant text-secondary hover:bg-surface-container transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="bg-white border border-outline-variant overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-2 py-3 w-12 font-label-caps text-label-caps text-secondary uppercase">Img</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">ID</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">Product ID</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">Name</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">Min Cost</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">Max Cost</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">User ID</th>
                <th className="px-4 py-3 font-label-caps text-label-caps text-secondary uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-secondary">
                    Loading...
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-secondary">
                    No products found
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-outline-variant hover:bg-surface-container-low transition-colors"
                  >
                    <td className="px-2 py-3 text-sm">
                      {product.imageUrl ? (
                        <>
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={40}
                            height={40}
                            unoptimized
                            className="object-cover rounded cursor-pointer border border-outline-variant w-10 h-10"
                            onMouseEnter={(e) =>
                              setHoveredImage({
                                url: product.imageUrl!,
                                x: e.clientX,
                                y: e.clientY,
                              })
                            }
                            onMouseMove={(e) =>
                              setHoveredImage((prev) =>
                                prev
                                  ? { ...prev, x: e.clientX, y: e.clientY }
                                  : null
                              )
                            }
                            onMouseLeave={() => setHoveredImage(null)}
                          />
                          {hoveredImage?.url === product.imageUrl && (
                            <div
                              className="fixed z-50 pointer-events-none"
                              style={{
                                left: hoveredImage.x - 150,
                                top: hoveredImage.y - 200,
                              }}
                            >
                              <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={300}
                                height={300}
                                unoptimized
                                className="object-contain rounded-lg shadow-2xl border-2 border-white"
                              />
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-10 h-10 bg-surface-container-low rounded border border-outline-variant flex items-center justify-center text-secondary text-xs">
                          -
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">{product.id}</td>
                    <td className="px-4 py-3 text-sm font-medium">{product.productId}</td>
                    <td className="px-4 py-3 text-sm">{product.name}</td>
                    <td className="px-4 py-3 text-sm">
                      {product.minCost != null ? `${product.minCost} €` : "-"}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {product.maxCost != null ? `${product.maxCost} €` : "-"}
                    </td>
                    <td className="px-4 py-3 text-sm">{product.userId}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditForm(product)}
                          className="text-primary hover:bg-primary-container px-3 py-1 rounded text-sm font-bold transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-error hover:bg-error-container px-3 py-1 rounded text-sm font-bold transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-secondary">Rows per page:</span>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setOffset(0);
              }}
              className="border border-outline-variant px-2 h-8 text-sm"
            >
              {LIMITS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOffset(0)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-outline-variant text-sm disabled:opacity-30 hover:bg-surface-container transition-colors"
            >
              First
            </button>
            <button
              onClick={() => setOffset(Math.max(0, offset - limit))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-outline-variant text-sm disabled:opacity-30 hover:bg-surface-container transition-colors"
            >
              Prev
            </button>
            <span className="text-sm text-secondary px-3">
              Page {currentPage} of {totalPages || 1}
            </span>
            <button
              onClick={() => setOffset(offset + limit)}
              disabled={currentPage >= totalPages}
              className="px-3 py-1 border border-outline-variant text-sm disabled:opacity-30 hover:bg-surface-container transition-colors"
            >
              Next
            </button>
            <button
              onClick={() => setOffset((totalPages - 1) * limit)}
              disabled={currentPage >= totalPages}
              className="px-3 py-1 border border-outline-variant text-sm disabled:opacity-30 hover:bg-surface-container transition-colors"
            >
              Last
            </button>
          </div>
        </div>

        {/*
        <div className="mt-12 border-t border-outline-variant pt-8">
          <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
            Toplu Image URL Güncelle
          </h3>
          <p className="text-sm text-secondary mb-4">
            CSV (tek sütun, başlıksız) yükleyin. Sıradaki her URL, sıradaki ürünün imageUrl alanına yazılır.
          </p>

          <form onSubmit={handleCsvUpload} className="flex items-end gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <input
                ref={fileRef}
                type="file"
                accept=".csv"
                onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                className="w-full border border-outline-variant px-4 h-12 text-sm file:h-full file:border-0 file:bg-primary file:text-on-primary file:px-4 file:font-bold file:cursor-pointer file:mr-3"
              />
            </div>
            <button
              type="submit"
              disabled={csvLoading || !csvFile}
              className="bg-primary text-on-primary h-12 px-6 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {csvLoading ? "Yükleniyor..." : "Güncelle"}
            </button>
            {csvStatus && (
              <p className="text-sm bg-surface-container-low px-4 py-2 w-full">{csvStatus}</p>
            )}
          </form>
        </div>
        */}
      </main>
    </div>
  );
}
