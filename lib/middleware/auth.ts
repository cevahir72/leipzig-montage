import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';

export function verifyAuth(request: NextRequest) {
  const header = request.headers.get('authorization');
  if (!header || !header.startsWith('Bearer ')) {
    return null;
  }

  try {
    const token = header.split(' ')[1];
    return jwt.verify(token, process.env.JWT_SECRET!) as {
      id: number;
      email: string;
    };
  } catch {
    return null;
  }
}

export function verifyCodeAuth(request: NextRequest) {
  const code = request.headers.get('code');
  if (!code || code !== process.env.CODE) {
    return false;
  }
  return true;
}
