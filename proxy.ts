import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

const proxy = async (request: NextRequest) => {
  const session = await getSession();

//   const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
//   if (isDashboardRoute && !session?.user) {
//     return NextResponse.redirect(new URL("/log-in", request.url));
//   }
  const isRegisterRoute = request.nextUrl.pathname.startsWith("/register");
  const isLoginRoute = request.nextUrl.pathname.startsWith("/log-in");

  if ((isLoginRoute || isRegisterRoute) && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
};

export default proxy;
