import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import connectDB from "@/lib/mongodb";
import Visitor from "@/models/Visitor";
import dns from "node:dns";

export const runtime = "nodejs";

export async function POST(request) {
  try {
     dns.setServers(["8.8.8.8", "8.8.4.4"]);

    await connectDB();
    await connectDB();

    let visitorId = request.cookies.get("portfolio_visitor")?.value;

    if (!visitorId) {
      visitorId = randomUUID();
    }

    await Visitor.updateOne(
      { visitorId },
      { $setOnInsert: { visitorId } },
      { upsert: true }
    );

    const totalVisitors = await Visitor.countDocuments();

    const response = NextResponse.json({
      success: true,
      totalVisitors,
    });

    if (!request.cookies.get("portfolio_visitor")) {
      response.cookies.set("portfolio_visitor", visitorId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    return response;
  } catch (error) {
    console.error("Visitor API error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to track visitors" },
      { status: 500 }
    );
  }
}