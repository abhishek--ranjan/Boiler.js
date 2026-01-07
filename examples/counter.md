# Concept: HTML-Driven Components (Simple & Powerful)

Each component is 3 files (optional but clean):

/components
  └── Counter/
      ├── counter.html
      ├── counter.css
      └── counter.js

---

**counter.html**
```html
<div class="counter">
  <span>{{count}}</span>
  <button onclick="increment">+</button>
</div>
```

**counter.css**
```css
.counter {
  font-size: 20px;
}
```

**counter.js**
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
