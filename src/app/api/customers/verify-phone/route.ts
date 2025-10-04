/**
 * App: Customer Registration
 * Package: src.app.api.customers.verify-phone
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: POST
 * Description: Mock endpoint accepting SMS verification codes for customer accounts.
 */
import { NextResponse } from 'next/server';

const POST = async () => new NextResponse(null, { status: 204 });

export { POST };
