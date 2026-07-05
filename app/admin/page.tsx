"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/admin/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/admin/dashboard");
    } catch {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-margin-mobile">
      <div className="w-full max-w-md bg-white border border-outline-variant p-8">
        <div className="text-center mb-8">
          <img src="/logo-1.png" alt="Logo" className="h-12 w-auto mx-auto mb-4" />
          <h1 className="font-headline-md text-headline-md text-primary font-bold">
            Admin Login
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-secondary uppercase">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-secondary uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-outline-variant px-4 h-12 focus:border-primary focus:ring-0"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p className="text-error text-sm bg-error-container px-4 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary h-12 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
