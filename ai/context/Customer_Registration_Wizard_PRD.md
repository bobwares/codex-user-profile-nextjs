# Product Requirements Document (PRD) — Customer Registration Wizard

## Summary
Build a multi-step customer registration wizard that collects standard customer information (identity, contact, address, preferences, and required consents), validates it, and creates a Customer record via server actions/route handlers. The flow must be accessible, internationalized-ready, secure for PII, and track key funnel metrics.

## Goals
- Friction-minimized account creation with high completion rates.
- Accurate, standardized capture of customer identity, contact, and address data.
- Configurable communication preferences and marketing consent.
- Email and optional SMS verification.
- Server-first data handling (App Router), Tailwind as primary styling.

## Non-Goals
- Full customer profile management (post-registration edits are out-of-scope for v1; link to “Manage Profile” may be stubbed).
- Payments, subscriptions, or KYC/AML checks (future phases).

## Personas
- Visitor (new): registers as a Customer to access services.
- Support: reviews registration logs/consents (out-of-scope UI; back-end telemetry required).

## Scope (Versioning)
- v1 (MVP): Email+password account, optional phone capture, single shipping/billing address, preferences, marketing consent, ToS/Privacy acceptance, email verification.
- v1.1: SMS phone verification, address autocomplete/vendor validation, basic rate limiting + captcha.
- v2: Social sign-in, multi-address book, two-factor auth enrollment.

## Success Metrics (North Star & Leading Indicators)
- Registration completion rate ≥ 70% within first session.
- Step drop-off map with time-to-complete ≤ 2m median.
- ≥ 95% email verification within 24h.
- Error budget: < 0.1% 5xx on POST /api/customers for 7d rolling.

## User Flows (Wizard Steps)
Each step is a dedicated route under `/register/*` and uses Server Components for layout plus minimal Client Components for interactivity.

1) Welcome/Start
- Purpose: brief value proposition, begin registration.
- Actions: CTA → Next.

2) Account
- Fields: email (required), password (required), confirm password (required), phone (optional for v1).
- Validation: email format & uniqueness, password strength.
- Actions: Next; sends verification email (deferred) after successful submission or at Review submit.

3) Personal Details
- Fields: legal first name, middle (optional), last name, preferred name (optional), date of birth (optional, configurable), gender (optional, configurable options), pronouns (optional).
- Actions: Next.

4) Address
- Fields: country, address line 1, line 2 (optional), city/locality, region/state/province, postal code, time zone (optional).
- Validation: by-country required fields; postal format; optional vendor validation (v1.1).
- Actions: Next.

5) Preferences & Consents
- Fields: preferred language, communication preferences (email, SMS), marketing consent (opt-in flag), terms of service acceptance (required), privacy policy acceptance (required), age confirmation (if DOB not provided and jurisdiction requires it).
- Actions: Next.

6) Review & Submit
- Summary of all inputs readonly 
- ability to edit previous steps.
- On submit: create customer, send email verification, optionally send SMS code if phone provided and v1.1 enabled.
- Confirmation page with registration reference and next steps.

7) Email/Phone Verification (Out-of-band Step)
- Email token link to `/verify/email?token=...` → marks email verified, shows success/failure.
- Phone code entry at `/verify/phone` (v1.1).

## Functional Requirements
- Server-first rendering with Server Actions for mutations (create/verify).
- Route handlers under `app/api/*` for external access and mocks in dev.
- Input validation (client hints + server definitive checks).
- Persisted customer record (via service layer; back-end stub in dev).
- Audit log for consent acceptance (timestamp, IP, user agent, versions of policies).

## Non-Functional Requirements
- Accessibility: WCAG 2.2 AA, full keyboard support, proper labels/help/error text.
- Performance: TTFB < 200ms on static pages, LCP < 2.5s P75 on 4G.
- Security/PII: HTTPS only, no PII in client logs, server logs redacted, strong password policy (configurable), rate limiting on auth endpoints, CSRF protection for forms, captcha (v1.1).
- Internationalization: language switch ready; address formats per country; RTL support.
- Observability: client funnel events and server metrics (latency, error rate).

## Data Model (Conceptual JSON)
Customer
```json
{
  "customerId": "string",
  "account": {
    "email": "string",
    "emailVerified": false,
    "phone": "+15551234567",
    "phoneVerified": false
  },
  "name": {
    "first": "string",
    "middle": "string",
    "last": "string",
    "preferred": "string"
  },
  "dob": "YYYY-MM-DD",
  "gender": "string",
  "pronouns": "string",
  "address": {
    "country": "US",
    "line1": "string",
    "line2": "string",
    "city": "string",
    "region": "CA",
    "postalCode": "94016",
    "timeZone": "America/Los_Angeles"
  },
  "preferences": {
    "language": "en",
    "communication": {
      "email": true,
      "sms": false
    },
    "marketingOptIn": false
  },
  "consents": {
    "termsAcceptedAt": "ISO-8601",
    "privacyAcceptedAt": "ISO-8601",
    "ageConfirmedAt": "ISO-8601"
  },
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601"
}
```

## Validation Rules (Server-Authoritative)
- Email: RFC 5322, uniqueness check; required.
- Password: ≥ 12 chars; include upper, lower, number or passphrase equivalent; breached password check recommended.
- Phone: E.164 when provided.
- Name: first and last required; unicode-safe; trimmed.
- Address: country required; enforce region/postal rules by country; normalize on save when possible.
- Consents: ToS and Privacy required; timestamps recorded with policy versions; age gate if DOB omitted and required by locale.

## Security & Compliance
- Encryption in transit; storage at rest handled by downstream service.
- Redact PII in logs and telemetry; no secrets in client bundles.
- Consent records immutable; include IP and policy version.
- Data retention policy hooks (to be implemented by back end).

## Accessibility & UX
- Use semantic HTML, labels, and ARIA where appropriate.
- Inline validation messages; error summaries with anchor links.
- Large touch targets; responsive layout; motion-reduced transitions.

## Telemetry (Event Catalog)
- `registration_step_viewed` {step, ts}
- `registration_step_completed` {step, ts, durationMs}
- `registration_submitted` {ts}
- `registration_succeeded` {customerId, ts}
- `registration_failed` {reason, ts}
- `verification_email_sent` {ts}
- `verification_email_verified` {ts}
- `verification_phone_sent` {ts}
- `verification_phone_verified` {ts}

## API Contracts (Route Handlers)
- POST `/api/customers`
  - Request: Customer payload (without server-managed fields).
  - Responses:
    - 201 { customerId }
    - 400 { code: "VALIDATION_ERROR", fieldErrors: [...] }
    - 409 { code: "EMAIL_TAKEN" }
    - 500 { code: "SERVER_ERROR" }
- POST `/api/customers/verify-email`
  - Request: { token }
  - Responses: 204 | 400 | 410
- POST `/api/customers/verify-phone` (v1.1)
  - Request: { phone, code }
  - Responses: 204 | 400 | 409
- GET `/api/geo/countries` → list; GET `/api/geo/regions?country=XX` (mock in dev).

## UX Structure (No Images)
- `/register` Welcome
- `/register/account` Account
- `/register/details` Personal Details
- `/register/address` Address
- `/register/preferences` Preferences & Consents
- `/register/review` Review & Submit
- `/verify/email` Email Verification Result
- `/verify/phone` Phone Verification (v1.1)

## Dependencies
- Email provider (transactional).
- Optional SMS provider.
- Optional address validation provider.
- Captcha provider (v1.1).

## Risks & Mitigations
- High drop-off on password rules → password strength meter and passphrase guidance.
- International address complexity → keep inputs flexible, validate server-side by country.
- Email deliverability → SPF/DKIM/DMARC; fallback resend flow.

## Acceptance Criteria (v1)
- A user can complete the wizard and receive a confirmation page.
- A Customer is created server-side with correct data normalization and consent timestamps.
- Email verification can mark `emailVerified = true`.
- Accessibility checks pass (axe-core basic suite).

## Mapping to App Router Pattern
- Server-first pages; Server Actions for mutations; route handlers for API.
- Tailwind for layout/components; small client components only where necessary.
- Error boundaries and loading fallbacks per segment.
- Analytics events emitted on each step.

---

## Pattern Inputs (pattern_config JSON)
Use the following JSON as the input to the pattern to scaffold routes, API mocks, and services.

```json
{
  "name": "customer-registration-wizard",
  "description": "Multi-step customer registration with verification, preferences, and consents.",
  "target_repo_root": "/workspace/customer-registration-wizard",
  "package_manager": "pnpm",
  "init_git": true,
  "node_version": "20.x",
  "router": "app",
  "source_dir": "src",
  "routes": [
    { "path": "/", "render": "static", "revalidate": 3600, "data_source": "inline", "seo": { "title": "Home", "description": "Landing" }, "generate_test": true },
    { "path": "/register", "render": "dynamic", "data_source": "inline", "seo": { "title": "Register", "description": "Create your account" }, "generate_test": true },
    { "path": "/register/account", "render": "dynamic", "data_source": "inline", "seo": { "title": "Account", "description": "Email and password" }, "generate_test": true },
    { "path": "/register/details", "render": "dynamic", "data_source": "inline", "seo": { "title": "Details", "description": "Personal information" }, "generate_test": true },
    { "path": "/register/address", "render": "dynamic", "data_source": "inline", "seo": { "title": "Address", "description": "Address information" }, "generate_test": true },
    { "path": "/register/preferences", "render": "dynamic", "data_source": "inline", "seo": { "title": "Preferences", "description": "Language and communications" }, "generate_test": true },
    { "path": "/register/review", "render": "dynamic", "data_source": "inline", "seo": { "title": "Review", "description": "Confirm and submit" }, "generate_test": true },
    { "path": "/verify/email", "render": "dynamic", "data_source": "inline", "seo": { "title": "Verify Email", "description": "Email verification" }, "generate_test": true },
    { "path": "/verify/phone", "render": "dynamic", "data_source": "inline", "seo": { "title": "Verify Phone", "description": "Phone verification" }, "generate_test": true }
  ],
  "api_mocks": {
    "enabled": true,
    "endpoints": [
      { "method": "POST", "route": "/api/customers", "status": 201, "example": { "customerId": "c_123" } },
      { "method": "POST", "route": "/api/customers/verify-email", "status": 204, "example": {} },
      { "method": "POST", "route": "/api/customers/verify-phone", "status": 204, "example": {} },
      { "method": "GET", "route": "/api/geo/countries", "status": 200, "example": ["US","CA","GB","DE"] },
      { "method": "GET", "route": "/api/geo/regions", "status": 200, "example": [{"country":"US","code":"CA","name":"California"}] }
    ]
  },
  "services": {
    "base_url": "http://localhost:3000",
    "headers": { "Accept": "application/json" },
    "timeout_ms": 15000,
    "retry": { "attempts": 2, "backoff_ms": 250 }
  },
  "state": { "kind": "context" },
  "errors": {
    "emit_error_pages": true,
    "monitoring": { "provider": "none" }
  },
  "tooling": {
    "eslint": true,
    "prettier": true,
    "testing": { "enabled": true, "coverage_threshold": 70 }
  },
  "alias": { "@": "src" },
  "env": {
    "env_template": {
      "API_BASE": "http://localhost:3000",
      "EMAIL_FROM": "no-reply@example.com"
    },
    "write_env_example": true
  }
}
```

## Open Questions
- Should DOB be mandatory in any jurisdictions we target at launch?
- Will we enable SMS verification in v1 or defer to v1.1?
- Which address validation vendor do we prefer (Loqate, USPS, Google Places), and what are SLA/cost constraints?
- Do we require captcha at any step for launch markets?

