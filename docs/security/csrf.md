# CSRF

- CSRF tokens are sourced from httpOnly cookies
- Framework injects tokens into all mutating requests automatically
- Developers cannot bypass CSRF protection
- Backend must validate tokens on every mutating request
