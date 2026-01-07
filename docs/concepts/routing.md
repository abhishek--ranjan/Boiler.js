# Routing

- Routes are configured in a static JS object
- Each route maps to a layout and component
- Auth guards are enforced at the routing layer
- Breadcrumbs are injected by layout
- Redirects are explicit and auditable

## Allowed
- Static route definitions
- Layout selection per route
- Auth guard functions

## Forbidden
- Dynamic route generation at runtime
- Implicit redirects
