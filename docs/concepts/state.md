# State

- State is local to each component
- State is reactive and proxied
- Only methods may mutate state
- No global state by default

## Allowed
- Local state per component
- State mutation via methods

## Forbidden
- Direct state mutation outside methods
- Global state leaks
