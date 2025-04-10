import { CounterComponent } from "./CounterComp.js";

function init(selector, component) {
  const app = document.querySelector(selector);

  component.forEach(template => {
    app.appendChild(template.template)
  });
}

init('#app', CounterComponent());
