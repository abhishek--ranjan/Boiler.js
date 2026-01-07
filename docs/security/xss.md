# XSS

- All template output is escaped by default
- {{{value}}} disables escaping (discouraged, unsafe)
- This prevents most XSS attacks by design
- Unsafe HTML is opt-in and must be justified

## Warning
- Using {{{value}}} may introduce XSS if not strictly controlled
