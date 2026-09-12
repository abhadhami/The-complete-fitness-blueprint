# Security Policy

## Supported security model

The public site is a marketing frontend. Paid content, customer data, payment secrets and authorization decisions must not be stored in or trusted from public client-side code.

## Reporting a vulnerability

Please report suspected security vulnerabilities privately to the site owner rather than publishing exploit details in a public issue. Include the affected URL/file, a concise description, reproduction steps, and impact where safe to provide them.

Do not include passwords, access tokens, payment credentials, or other sensitive personal data in a report.

## Before paid launch

Production must have server-side authentication, authorization/entitlements, private paid-content storage, verified payment webhooks, secret management, rate limiting, security headers and tested backup/rollback procedures.
