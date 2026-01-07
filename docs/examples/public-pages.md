# Example: Public Pages

## Folder Structure
/components/PublicPage/
  public-page.html
  public-page.css
  public-page.js

## HTML
```html
<div class="public-page">
  <h1>Welcome</h1>
  <p>This is a public page.</p>
</div>
```

## JS
```js
export default {
  name: 'PublicPage',
  template: /* html */ `...`,
  style: '',
  state: {},
  methods: {}
}
```

## Explanation
- No authentication required
- Minimal state and logic

## Security Notes
- No sensitive data exposed
