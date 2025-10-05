/**
 * App: Codex User Profile Next.js
 * Package: hooks
 * File: useIsMounted.ts
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: useIsMounted
 * Description: React hook that identifies when a component has mounted on the client.
 */

import { useEffect, useRef } from 'react';

export function useIsMounted(): boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
}
