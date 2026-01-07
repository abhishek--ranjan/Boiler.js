# Templates

## Allowed
- {{value}} for escaped data binding
- {{{value}}} for unescaped (discouraged, unsafe)
- Event bindings via HTML attributes (e.g., onclick)

## Forbidden
- No logic or expressions in templates
- No loops or conditionals in template markup

## Why
- Prevents injection attacks
- Ensures templates are static and auditable
- Keeps logic in JS, not markup
