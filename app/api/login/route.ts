import { NextRequest, NextResponse } from "next/server";

interface LoginResponseProps {
  code: string;
  msg: string;
  name?: string;
}

export async function POST( req: NextRequest ) {
  const body = await req.json();
  const { id, password } = body;
  let json: LoginResponseProps = { code: "", msg: "", name: "" };

  if (id === "123" && password === "123") {
    json = { code: "00", msg: "정상", name: "신대범" };
  } else {
    json = { code: "23", msg: "아이디 또는 비밀번호가 다릅니다" };
  }

  return new NextResponse(JSON.stringify(json));

}