import { CounterComponent } from "./CounterComp.js";

/**
 * The initializer method to start the frontend
 * @param {string} selector - What element to branch off of
 * @param {Object[]} component - Object of the tag and template
 */
function init(selector, component) {
  const app = document.querySelector(selector);

  component.forEach(template => {
    app.appendChild(template.template)
  });
}

init('#app', CounterComponent());
