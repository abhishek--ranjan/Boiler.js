# Async

- preload() supports async data fetching
- All async operations must be explicit
- No implicit async side effects

## Allowed
- Async preload for data
- Explicit async methods

## Forbidden
- Implicit async in templates
- Untracked async side effects
