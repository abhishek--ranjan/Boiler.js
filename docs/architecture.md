# Architecture

## Runtime Layers

- Template parser and renderer
- State manager
- Event system
- Security enforcement (XSS, CSRF)
- Layout and routing engine

## Responsibility Boundaries

- Core: Rendering, state, events, security
- User code: Components, layouts, templates, styles

## What the Core Does NOT Do

- No build step
- No JSX or transpilation
- No virtual DOM
- No implicit state mutation

## Why No Build Step?

- Ensures transparency and auditability
- Reduces attack surface
- Simplifies onboarding

## Why Layouts Are Separate from Components

- Layouts govern structure, navigation, and security context
- Components are reusable, isolated UI units

## Diagram

```
[Templates]   [Layouts]
     |            |
     v            v
[Renderer] <-> [State] <-> [Events]
     |
[Security Layer]
     |
[DOM]
```
