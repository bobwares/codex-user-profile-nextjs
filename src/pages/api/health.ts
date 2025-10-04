/**
 * App: Codex User Profile Next.js
 * Package: pages/api
 * File: health.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default
 * Description: Health check endpoint returning static status for monitoring.
 */

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'ok' });
}
