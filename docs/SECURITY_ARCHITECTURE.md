# Security Architecture — The Complete Fitness Blueprint

## Security boundary

The public GitHub Pages frontend is treated as **untrusted client code**. It may contain marketing copy, program names, previews, and public assessment UX. It must never contain secrets, payment credentials, private program lessons, private media, admin credentials, or authorization decisions that grant paid access.

Paid access must be enforced server-side.

```text
Browser
  |
  v
Public frontend (untrusted)
  |
  +--> Authentication service
  |
  +--> Secure API / server functions
          |
          +--> Authorization / entitlement check
          |
          +--> Postgres (RLS)
          |
          +--> Private storage / signed URLs
          |
          +--> Payment gateway webhook verification
```

## Required production controls

1. **Authentication** — use a managed identity provider such as Supabase Auth. Never implement password storage in the static frontend.
2. **Authorization** — every protected API/content request must verify the authenticated user and the user's entitlement. Never trust a program ID, price, role, or `isPaid` value supplied by the browser.
3. **Database isolation** — store purchases/entitlements in Postgres and enforce Row Level Security (RLS). Customers can read only their own entitlement records. Admin operations require an explicit server-side admin role.
4. **Private content** — paid lessons and media stay outside the public repository and outside public object-storage buckets. Serve only after authorization, preferably with short-lived signed URLs/tokens.
5. **Payments** — create orders and verify gateway callbacks/webhooks on the server. Never mark a purchase as paid based only on a frontend redirect or query parameter.
6. **Secrets** — payment secrets, service-role keys, webhook secrets and other credentials belong only in the backend/host's secret store. They must never be committed to Git.
7. **Input validation** — validate and constrain all API input server-side; use allow-lists for program identifiers and bounded string/number lengths.
8. **Abuse controls** — rate-limit authentication, assessment submission, order creation, entitlement checks and other public endpoints. Log suspicious repeated failures.
9. **Security headers** — production hosting should provide HTTPS, HSTS, Content-Security-Policy, frame protection, MIME sniffing protection, referrer policy and permissions policy. Headers must be configured at the actual hosting layer; GitHub Pages alone is not a secure backend boundary.
10. **Error handling** — return generic client-facing errors. Do not expose stack traces, database details, secrets, webhook payloads or authorization internals.
11. **Logging/monitoring** — record security-relevant events such as login failures, payment verification failures, entitlement changes and admin actions. Never log passwords, access tokens or payment secrets.
12. **Recovery** — keep versioned database migrations, backups and a tested rollback path. Production changes must go through staging/validation before release.

## Non-negotiable access model

A customer who buys Program A gets Program A only. Program B remains inaccessible even if the customer knows or guesses its URL/ID. Changing client-side JavaScript, calling an endpoint directly, or manipulating browser storage must not bypass the server-side entitlement check.

## Development rule

Until authentication, authorization, private storage and verified payment webhooks are connected, **do not put real paid program content into the public repository**.

## Threats to test before launch

- Unauthenticated request to protected API/content
- User A attempting to access User B's entitlement/content
- User with Program A attempting Program B access
- Guessing sequential IDs or changing URL parameters
- Forged payment-success redirect
- Forged/replayed webhook
- Expired/revoked entitlement
- Direct private-storage URL access
- Admin endpoint access as a normal customer
- Excessive login/order/assessment requests
- Malformed/oversized input
- Browser console/network inspection for secrets or paid content
- Accidental secret commits

## Important limitation

No website can honestly be guaranteed 100% hack-proof. The goal is defense in depth: minimize exposed attack surface, keep sensitive data server-side, enforce least privilege, monitor abuse, and make unauthorized access fail closed.
