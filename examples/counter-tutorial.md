# Tutorial: Building a Simple HTML-Driven Counter Component

This tutorial demonstrates how to create a reusable, interactive Counter component using the framework’s HTML-driven approach. You’ll see how to organize your files, bind data, handle events, and keep logic, style, and markup cleanly separated.

---

## 1. Folder Structure

Each component lives in its own folder for clarity and modularity. For our Counter example:

```
/components
  └── Counter/
      ├── counter.html   // Markup for the Counter component
      ├── counter.css    // Styles for the Counter component
      └── counter.js     // State and logic for the Counter component
```

---

## 2. Writing the Markup (counter.html)

This file defines the UI structure. Use double curly braces (`{{count}}`) for data binding, and standard HTML attributes for event hooks.

```html
<div class="counter">
  <span>{{count}}</span>
  <button onclick="increment">+</button>
</div>
```

- `<span>{{count}}</span>`: Displays the current value of `count` from the component’s state.
- `<button onclick="increment">+</button>`: Calls the `increment` method when clicked.

---

## 3. Adding Styles (counter.css)

This file contains styles scoped to the Counter component. Use class selectors to avoid style conflicts.

```css
.counter {
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #f9f9f9;
}
.counter button {
  font-size: 20px;
  padding: 4px 12px;
  cursor: pointer;
}
```

---

## 4. Adding Logic (counter.js)

This file manages the state and methods for the component. The framework will automatically bind state to the template and connect methods to events.

```js
export default {
  state: {
    count: 0
  },
  methods: {
    increment() {
      this.state.count++;
    }
  }
}
```

- `state`: Holds reactive data for the component. Here, `count` starts at 0.
- `methods`: Functions that can be triggered by user actions or other events. `increment` increases the count by 1.

---

## 5. How It Works

- The framework loads `counter.html`, `counter.css`, and `counter.js` together as a single component.
- It replaces `{{count}}` in the HTML with the current value from the state.
- When the button is clicked, the `increment` method runs, updating the state and re-rendering the view.
- Styles from `counter.css` are applied only to this component, keeping things modular.

---

## 6. Why This Pattern?

- **Separation of concerns**: Markup, style, and logic are in their own files, making code easier to read and maintain.
- **Reusability**: Each component is self-contained and can be reused anywhere in your app.
- **Simplicity**: No build tools or complex syntax required—just HTML, CSS, and JS.
- **Scalability**: This pattern works for both small widgets and large, complex apps.

---

## 7. Next Steps

- Try creating more components (e.g., TodoList, Modal, Navbar) using this pattern.
- Explore advanced features like props, slots, or lifecycle hooks as your framework evolves.
- Contribute your ideas and improvements to the community!

---

This approach lets you build modern, maintainable web apps with minimal overhead and maximum clarity.
