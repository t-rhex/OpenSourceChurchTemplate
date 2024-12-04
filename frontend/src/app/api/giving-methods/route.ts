import { NextResponse } from "next/server";
import { giveConfig } from "@/app/give/config/GiveConfig";

export async function GET() {
  // In production, this would fetch from your database
  return NextResponse.json({
    givingMethods: giveConfig.givingMethods,
    paymentOptions: giveConfig.paymentOptions,
  });
} 