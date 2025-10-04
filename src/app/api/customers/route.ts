/**
 * App: Customer Registration
 * Package: src.app.api.customers
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: POST
 * Description: Mock customer creation endpoint returning a sample identifier.
 */
import { NextResponse } from 'next/server';

const POST = async () => NextResponse.json({ customerId: 'c_123' }, { status: 201 });

export { POST };
