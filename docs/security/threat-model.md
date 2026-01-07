# Threat Model

- Assumes attacker can control all user input
- Assumes attacker can attempt CSRF, XSS, and session fixation
- Framework responsibility: prevent client-side injection and request forgery
- Not responsible for server-side or infrastructure vulnerabilities
