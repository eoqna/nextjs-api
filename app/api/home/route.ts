import { db } from "../../_lib/db";

export async function GET() {
  try {
    const [rows] = await db.execute("SELECT * FROM tb_users");

    return new Response(JSON.stringify(rows), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
  }
}