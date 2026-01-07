# Example: Payments

## Folder Structure
/components/Payments/
  payments.html
  payments.css
  payments.js

## HTML
```html
<form class="payment-form">
  <input name="amount" type="number" />
  <button type="submit">Pay</button>
</form>
```

## JS
```js
export default {
  name: 'Payments',
  template: /* html */ `...`,
  style: '',
  state: { amount: 0 },
  methods: {
    submit(e) {
      e.preventDefault();
      // Call stdlib.api
    }
  }
}
```

## Explanation
- Handles payment submission
- Uses stdlib.api for secure calls

## Security Notes
- CSRF token injected automatically
- Input validated on backend
