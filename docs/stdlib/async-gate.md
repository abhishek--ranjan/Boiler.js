# Async Gate

- Controls async flow for UI readiness
- Ensures all preloads complete before rendering
- Prevents race conditions

## Allowed
- Awaiting preload before render

## Forbidden
- Rendering before async complete
