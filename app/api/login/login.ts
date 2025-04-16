// pages/api/hello.ts

import { NextApiRequest, NextApiResponse } from "next";

// export async function POST( req: Request, ) {
//   const body = await req.json();
//   const { id, password } = body;

//   console.log(body);

//   if (id && password) {
//     console.log("id: " + id);
//     console.log("password: " + password);
//   }

//   // e.g. Insert new user into your DB
//   const newUser = { name: "신대범" };

//   return new Response(JSON.stringify(newUser), {
//     status: 200,
//     headers: { 
//       "Content-Type": "application/json" 
//     },
//   });
// }

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "'GET' Method is not allowed" });
  }

  const { id, password } = req.body;

  // 간단한 하드코딩된 로그인 검증 예시
  if (id && password) {
    return res.status(200).json({ name: "유저" });
  } else {
    return res.status(400).json({ error: "Bad Request" });
  }
}