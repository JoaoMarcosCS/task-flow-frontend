import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  console.log("teste", token);

  const loginPath = new URL("/signIn", request.url);

  if (!token) {
    return NextResponse.redirect(loginPath);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
