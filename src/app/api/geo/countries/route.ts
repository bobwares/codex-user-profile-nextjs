/**
 * App: Customer Registration
 * Package: src.app.api.geo.countries
 * File: route.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: gpt-5-codex
 * Date: 2025-10-04T19:22:27Z
 * Exports: GET
 * Description: Mock endpoint returning supported countries for address selection.
 */
import { NextResponse } from 'next/server';

const GET = async () => NextResponse.json(['US', 'CA', 'GB', 'DE']);

export { GET };
