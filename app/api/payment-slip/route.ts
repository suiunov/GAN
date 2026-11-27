import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = form.get("name");
  const amount = form.get("amount");
  const slip = form.get("slip");

  if (!name || !amount || !slip) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const lineNotifyToken = process.env.LINE_NOTIFY_TOKEN;
  const msg = `\n[Payment Slip Received]\nName: ${name}\nAmount: NT$ ${amount}\n(Image attached separately — check inbox/storage)`;

  if (lineNotifyToken) {
    try {
      await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lineNotifyToken}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ message: msg }),
      });
    } catch (e) {
      console.error("LINE Notify failed:", e);
    }
  } else {
    console.log("[Payment slip received — LINE_NOTIFY_TOKEN not set]", { name, amount });
  }

  return NextResponse.json({ ok: true });
}
