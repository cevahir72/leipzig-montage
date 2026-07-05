import { type NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { User } from "@/lib/models";

function generateRefToken() {
  return crypto.randomBytes(40).toString("hex");
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return Response.json({ error: "Email and password required" }, { status: 400 });
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  const refToken = generateRefToken();
  await user.update({ token, refToken });

  return Response.json({
    token,
    refToken,
    user: { id: user.id, email: user.email, username: user.username },
  });
}
