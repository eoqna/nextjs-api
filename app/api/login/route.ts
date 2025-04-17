export async function POST( req: Request ) {
  const body = await req.json();
  const { id, password } = body;

  if (req.method === "POST") {
    if (id === "123" && password === "123") {
      const json = { code: "00", msg: "정상", name: "신대범", };
  
      return new Response(JSON.stringify(json), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const json = { code: "40", msg: "아이디 또는 비밀번호가 다릅니다", };

      return new Response(JSON.stringify(json), {
        status: 200,
      });
    }
  
  } else {
    return new Response(JSON.stringify({ error: "Request method 'GET' is not supported" }), {
      status: 405,
    });
  }

}