# Architecture Decision Record

Next.js App Router Scaffold for Registration Wizard

**Turn**: 1

**Status**: Accepted

**Date**: 2025-10-05 - 19:19

**Context**
The project requires a customer registration wizard with multi-step navigation, API integrations, and Tailwind styling.
Establishing a baseline Next.js structure ensures subsequent turns can focus on business logic rather than scaffolding.

**Options Considered**
- Use create-next-app default starter and retrofit requirements later.
- Manually scaffold an App Router project aligned with the organization’s conventions.

**Decision**
Manually scaffolded the App Router project with Tailwind, ESLint flat config, and path aliases to align with the
application implementation pattern guidance. This approach gives full control over directory layout, metadata headers, and
mock API handlers demanded by governance.

**Result**
Created configuration files, core routes, reusable UI components, client-side interactivity, and mock service layers that will
support the customer onboarding experience.

**Consequences**
- Provides a solid foundation for future feature work.
- Requires ongoing maintenance of custom scaffolding as Next.js evolves.
