# Auth & Session

- Session management is handled at the layout level
- Auth state is not exposed to components
- Session tokens are stored in httpOnly cookies only

## Allowed
- Layouts may check session state

## Forbidden
- Components reading or writing session directly
- Storing tokens in JS-accessible storage
