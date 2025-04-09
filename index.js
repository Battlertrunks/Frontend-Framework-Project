
class Signal {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
    this._emit();
  }

  _emit() {
    this.subscribers.forEach(subscribe => subscribe(this.value));
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }
}

let effectCallback = null;

function createSignal(value) {
  const signal = new Signal(value);

  return [
    function value() {
      if (effectCallback) signal.subscribe(effectCallback);

      return signal.getValue();
    },
    function setValue(newValue) {
      signal.setValue(newValue);
    }
  ]
}

function effect(callback) {
  effectCallback = callback;
  effectCallback();
  effectCallback = null;
}

// Handle events that occur on the DOM
export const onClick = f => ({
  type: "event",
  click: f
});

const createElement = tagName => (strings, ...args) => {

  console.log(tagName);

  const { template, on } = strings.reduce((acc, curString, index) => {
    
    console.log(args[index])
    if (args[index]?.type === "event") {
      return {
        ...acc,
        on: { click: args[index].click }
      }
    } 

    return {
      ...acc,
      template: acc.template + curString + (args[index] ? args[index]() : "")
    };
  } , { template: "", on: {} });

  console.log(template);

  // Create the DOM element 
  const element = document.createElement(tagName);

  if (on?.click) element.addEventListener("click", on.click);
  element.appendChild(document.createTextNode(template))
  return {
    type: "element",
    template: element
  };
};

const p      = createElement("p");
const button = createElement("button");

function reRenderDOM(tagName, updatedContent) {
  // TODO: Make this more dynamic and less one use or path
  const element = document.getElementsByTagName(tagName)[0];
  element.textContent = updatedContent;
}

// Component of the counter we can increase number and display the number
function CounterComponent() {
  // Scaffold the state
  const [value, setValue] = createSignal(1);

  const addCount = () => {
    setValue(value() + 1);
    reRenderDOM("p", `sup, ${value()}`)
  };

  // TODO
  // Make a effect / computed property
  effect(() => {
    console.log('hey')
  });

  return [
    p`sup, ${value}`,
    button`${onClick(() => addCount())}Add 1`
  ];
}

function init(selector, component) {
  const app = document.querySelector(selector);

  console.log(component);
  component.forEach(template => {
    console.log(template)
    app.appendChild(template.template)
  });
}

init('#app', CounterComponent());
