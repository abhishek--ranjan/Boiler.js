# Components

## Component Contract

Every component must export the following object:

```js
export default {
  name,        // string (required)
  template,    // string (required, HTML)
  style,       // string (optional, CSS)
  state,       // object (optional, reactive)
  methods,     // object (optional, functions)
  preload,     // function (optional, async)
  onMount,     // function (optional)
  onDestroy    // function (optional)
}
```

## Lifecycle
- preload() runs before rendering (async allowed)
- onMount() runs after insertion into DOM
- onDestroy() runs before removal from DOM

## Rendering Rules
- Only the template string is rendered
- State is bound to template via {{value}}
- Methods are bound to events via HTML attributes

## State Mutation Rules
- State must only be mutated via methods
- Direct mutation outside methods is forbidden

## Forbidden Behaviors
- No direct DOM manipulation
- No global state leaks
- No logic in templates
