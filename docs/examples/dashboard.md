# Example: Dashboard

## Folder Structure
/components/Dashboard/
  dashboard.html
  dashboard.css
  dashboard.js

## HTML
```html
<div class="dashboard">
  <h2>Dashboard</h2>
  <div>{{userName}}</div>
</div>
```

## JS
```js
export default {
  name: 'Dashboard',
  template: /* html */ `...`,
  style: '',
  state: { userName: '' },
  preload: async function() {
    // Fetch user data
  }
}
```

## Explanation
- Loads user data on preload
- Displays personalized info

## Security Notes
- Data fetched via stdlib.api
- Output escaped by default
