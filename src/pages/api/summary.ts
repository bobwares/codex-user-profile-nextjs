/**
 * App: Codex User Profile Next.js
 * Package: pages/api
 * File: summary.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default
 * Description: Mock API endpoint delivering summary data for the home page.
 */

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    title: 'User Experience Platform',
    tagline: 'Deliver personalized user profiles at scale with automated governance.',
    stats: {
      users: 12894,
      projects: 362,
      uptime: '99.99%'
    }
  });
}
