# Example: Login Flow

## Folder Structure
/components/Login/
  login.html
  login.css
  login.js

## HTML
```html
<form class="login-form">
  <input name="username" />
  <input name="password" type="password" />
  <button type="submit">Login</button>
</form>
```

## JS
```js
export default {
  name: 'Login',
  template: /* html */ `...`,
  style: '',
  state: { username: '', password: '' },
  methods: {
    submit(e) {
      e.preventDefault();
      // Call stdlib.api
    }
  }
}
```

## Explanation
- Handles user login
- Uses stdlib.api for authentication

## Security Notes
- No password stored in JS after submit
- CSRF token injected automatically
