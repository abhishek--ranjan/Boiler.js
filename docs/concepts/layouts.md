# Layouts

- Multiple layout shells are supported (e.g., public, authenticated)
- Layouts own header, footer, and navigation
- Slot-based rendering for content injection
- Layouts govern breadcrumb and navigation context
- Layouts enforce security context (e.g., session, auth)

## Allowed
- Defining multiple layouts
- Slot usage for content

## Forbidden
- Mixing layout and component logic
- Dynamic layout mutation at runtime
