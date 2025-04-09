
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

const createElement = tagName => (strings, ...args) => {

  console.log(tagName);

  const { template } = strings.reduce((acc, curString, index) => {
    console.log(acc.template);
    console.log(curString);
    return {
      ...acc,
      template: acc.template + curString + (args[index] ? args[index]() : "")
    };
  } , { template: {} });

  console.log(template);

  // Create the DOM element 
  const element = document.createElement(tagName);

  element.appendChild(document.createTextNode(template))
  return {
    type: "element",
    template: element
  };
};

const p      = createElement("p");
const button = createElement("button");


// Component of the counter we can increase number and display the number
function CounterComponent() {

  // Scaffold the state
  const [value, setValue] = createSignal(1);


  return [
    p`sup, ${value}`,
    button`Add 1`
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
