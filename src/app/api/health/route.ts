/**
 * App: Customer Registration
 * Package: src.app.api.health
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GET
 * Description: Health check endpoint returning operational status for uptime probes.
 */
import { NextResponse } from 'next/server';

const GET = async () => NextResponse.json({ status: 'ok' });

export { GET };
