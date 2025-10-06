# Architecture Decision Record

Cookie-Backed Registration State Management

**Turn**: 1

**Status**: Accepted

**Date**: 2025-10-05 - 23:29

**Context**
The registration wizard requires persisted state across multiple App Router pages without introducing a client-side global store. Server Actions should remain the primary mutation mechanism while keeping data server-first.

**Options Considered**
- Store wizard state in React client context using client components.
- Persist data in a temporary database table or external cache.
- Use encrypted cookies to hold the aggregated registration payload between steps.

**Decision**
Use an encrypted HTTP-only cookie to store the aggregated registration payload between steps. This approach aligns with the Next.js App Router server-first paradigm and avoids additional infrastructure while enabling server actions to merge updates per step.

**Result**
- Implemented `registrationSession` helpers to merge and retrieve state from the cookie.
- Server actions update the cookie and redirect to subsequent steps.

**Consequences**
- Keeps the wizard server-rendered with minimal client-side state.
- Cookie size limits require compact payloads; future scaling may necessitate durable storage.
- Sensitive data is protected by HTTP-only cookie flags but still subject to cookie storage policies.
