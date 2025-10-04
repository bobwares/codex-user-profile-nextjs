# Architecture Decision Record

Next.js App Router Scaffold with Tailwind and Server Actions

**Turn**: 1

**Status**: Accepted

**Date**: 2025-10-04 - 19:22

**Context**
The Customer Registration project required a foundational Next.js implementation aligned with the App Router pattern, including Tailwind styling, mocked APIs, and a multi-step wizard.

**Options Considered**
- Build with Next.js App Router, Tailwind, and server actions (recommended by pattern).
- Use Pages Router with client-heavy forms.
- Use an alternative framework such as Remix or Nuxt.

**Decision**
Followed the prescribed Next.js App Router pattern, leveraging server components for each wizard step, Tailwind for styling, and server actions for submission. Mocked API routes align with the pattern inputs and support integration later.

**Result**
Created route files, shared layouts, context providers, mocked API handlers, and supporting tests/documentation.

**Consequences**
- Pros: Server-first rendering, consistent developer tooling, easy extension for future steps.
- Cons: Requires developers to be familiar with App Router conventions and server actions.
