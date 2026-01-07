# Boiler.js

Built for teams, not demos.
A HTML-first, security-aware UI framework for long-lived applications.


## Boiler.js

Boiler.js is a HTML-first, security-aware JavaScript framework built for teams, not demos. It is designed for large, long-lived applications where clarity, auditability, security, and maintainability matter more than trends, hype, or syntactic cleverness.


## Why Boiler.js exists

Modern frontend frameworks optimize for:
- Demos
- Short-term developer excitement
- Rapid iteration with heavy tooling

Most real systems need the opposite. Boiler.js exists because many teams need:
- Plain HTML and CSS
- Explicit architecture
- Predictable behavior
- Security by default
- Frameworks that age well over 5–10 years

Boiler.js is intentionally boring. That is its feature.


## What Boiler.js is
- ✅ HTML-first (real .html files, not JSX)
- ✅ No build step required
- ✅ Layout-driven routing
- ✅ Security baked into the runtime
- ✅ Explicit lifecycle and async control
- ✅ Modular, domain-driven structure
- ✅ Designed for teams and governance


## What Boiler.js is not
- ❌ Not a React replacement
- ❌ Not a compiler or meta-framework
- ❌ Not JSX-based
- ❌ Not a UI animation toolkit
- ❌ Not optimized for micro-benchmarks
- ❌ Not designed for toy apps or demos

If you want bleeding-edge frontend experiments, this is not for you.


## Core principles

Boiler.js is built on a small set of non-negotiable principles:
1. HTML is the source of truth
2. Explicit is better than implicit
3. Security is framework responsibility
4. Layouts are first-class
5. Async must be controlled
6. Framework stays small, apps grow
7. Long-term maintainability beats short-term DX

If a feature violates these principles, it does not belong in Boiler.js.


## Quick example

**Component HTML (payment-form.html)**
```html
<section class="payment-form">
  <h2>Make Payment</h2>
  <label>
    Amount
    <input type="number" value="{{amount}}" />
  </label>
  <button onclick="submit">Pay</button>
  <p class="status">{{status}}</p>
</section>
```

**Component Logic (payment-form.js)**
```js
export default {
  name: "PaymentForm",
  template: "./payment-form.html",
  style: "./payment-form.css",
  state: {
    amount: "",
    status: ""
  },
  methods: {
    async submit() {
      this.state.status = "Processing...";
      // API call via std/api
    }
  }
};
```
No JSX. No hooks. No magic.


## Architecture overview

Boiler.js is intentionally layered and explicit.

```
Application
  ├─ Domain Modules
  │   ├─ Components
  │   ├─ Services
  │   └─ Domain State
  ├─ Layouts & Routing
  ├─ Component Runtime
  ├─ Standard Library
  └─ Core Engine
```
Each layer has clear boundaries and hard rules.



## Layout-driven design

Boiler.js treats layouts as first-class citizens, not hacks. You define layouts such as:
- Public layout
- Auth layout
- Application layout
- Admin layout

Routes select layouts. Layouts define navigation and structure. Components only render content.

This eliminates:
- Header/footer duplication
- Breadcrumb chaos
- Auth logic leaking into UI


## Security by default

Security is not optional in Boiler.js.

**Built-in protections:**
- Route-level authentication guards
- Automatic CSRF token injection
- XSS-safe template binding by default
- Explicit unsafe HTML opt-in
- Trusted template sources only

```
{{value}}   → escaped (default)
{{{value}}} → unsafe (explicit, discouraged)
```
Developers cannot accidentally “forget” security steps.



## Standard library (opt-in, framework-owned)

Boiler.js ships with a small, opinionated standard library:
- std/api – API calls with CSRF handling
- std/crypto – Safe crypto helpers
- std/async – Async gates and coordination
- std/preload – Data loading before render
- std/storage – Storage abstraction

UI code must not call browser APIs directly.

**CORS Note:**
Cross-Origin Resource Sharing (CORS) is not handled by Boiler.js. All cross-origin requests must be allowed by your backend server via proper CORS headers. The framework does not bypass or manage CORS; it is a browser and server-level security feature. Ensure your backend is configured to allow requests from your frontend origin as needed.


## CSS strategy

Boiler.js does not depend on Bootstrap or Tailwind. Instead, it provides:
- A small base CSS layer
- Grid + Flex layout helpers
- CSS variables for theming
- Minimal UI primitives (buttons, forms, cards)
- Full responsiveness by default

Users are free to:
- Override variables
- Add custom CSS
- Build full design systems on top



## Folder structure (recommended)

```
src/
├── app/
│   ├── bootstrap.js
│   ├── routes.js
│   └── config.js
├── layouts/
│   ├── public-layout.html
│   ├── auth-layout.html
│   └── app-layout.html
├── domains/
│   ├── auth/
│   ├── payments/
│   └── dashboard/
├── shared/
│   └── styles/
├── std/
└── core/
```
Organized by business capability, not file type.



## Who should use Boiler.js

Boiler.js is a strong fit for:
- Fintech platforms
- Banking & regulated systems
- Government / PSU projects
- Enterprise internal tools
- Admin dashboards
- Long-lived SPAs
- Backend-heavy teams

If your system must survive audits, handovers, and years of change — Boiler.js fits.



## Who should not use Boiler.js
- Hobby projects
- UI animation showcases
- Rapid prototyping demos
- Teams chasing frontend trends
- Apps optimized for social virality

That is intentional.



## Governance & stability

Boiler.js is spec-driven.
- Architecture is documented
- Security rules are explicit
- Breaking changes are rare
- Features require justification
- Governance favors stability over novelty

This project optimizes for trust, not churn.



## Roadmap (high level)

**v0.1**
- Core runtime
- Layout routing
- Security baseline
- Base CSS

**v0.2**
- Nested components
- Scoped CSS
- Improved preload lifecycle

**v0.3**
- Role-based access helpers
- Router guards
- Tooling improvements (optional)



## Contributing

Contributions are welcome, but discipline matters. Please read:
- Architecture rules
- Security model
- Contribution guidelines

Features that increase magic, implicit behavior, or complexity without clear benefit will be rejected.



## Philosophy (one line)

Boiler.js is built for teams who expect their software to outlive trends.



## License

MIT License.
