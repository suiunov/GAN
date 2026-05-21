import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const required = ["name", "phone", "date", "time"];
  for (const f of required) {
    if (!body[f]) return NextResponse.json({ ok: false, error: `Missing ${f}` }, { status: 400 });
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  if (new Date(body.date) < tomorrow) {
    return NextResponse.json({ ok: false, error: "Booking must be at least 1 day in advance" }, { status: 400 });
  }

  const lineNotifyToken = process.env.LINE_NOTIFY_TOKEN;
  if (lineNotifyToken) {
    const msg =
      `\n[New Appointment]\n` +
      `Name: ${body.name}\nPhone: ${body.phone}\nLINE: ${body.lineId || "-"}\n` +
      `Email: ${body.email || "-"}\nDate: ${body.date}\nTime: ${body.time}\n` +
      `Project: ${body.project || "-"}`;

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
    console.log("[Appointment received — LINE_NOTIFY_TOKEN not set]", body);
  }

  return NextResponse.json({ ok: true });
}
