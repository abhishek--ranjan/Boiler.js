# Security Model

## Trust Boundaries
- Framework code is trusted
- User templates and data are untrusted

## Threat Assumptions
- Attackers may control input data
- XSS, CSRF, and session attacks are primary threats

## Attack Surfaces
- Template rendering
- State mutation
- Event handling

## Framework Protections
- Escapes all template output by default
- Enforces CSRF tokens on all mutating requests
- No direct DOM access from user code

## Not Protected
- Server-side vulnerabilities
- Out-of-band JS execution
