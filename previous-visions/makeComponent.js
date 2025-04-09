export const init = (selector, component) => {
  const app = document.querySelector(selector);
  console.log(app)
  console.log(component)
  component.forEach(template => {
    app.appendChild(template.template)
  });
};

let state = {};
let watcher = {};

export const createComponent = ({
  template,
  methods = {},
  watchers = {},
  initialState = {}
}) => {
  state = initialState;
  let previous;

  const mappedMethods = props =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
          console.log(methods, key, props)
          const nextNode = template({
            ...props,
            ...state,
            ...watchers,
            methods: mappedMethods(props)
          });
          console.log(nextNode);
          
          const app = document.querySelector("#app");
          app.textContent = '';
          nextNode.forEach(template => {
            app.appendChild(template.template)
          });

          previous = [...nextNode];
          return state;
        }
      }), {}
    );

  const mappedWatchers = props =>
    Object.keys(watchers).reduce(
      (acc, key) => ({
        ...acc,
        [key]: () => {
          console.log(watchers, key)
          state = watchers[key];
          console.log(state)
          const nextNode = template({
            ...props,
            ...state,
            ...methods,
            watchers: mappedWatchers(props)
          });
          console.log(nextNode);
          
          const app = document.querySelector("#app");
          app.textContent = '';
          nextNode.forEach(template => {
            app.appendChild(template.template)
          });

          previous = [...nextNode];
          return state;
        }
      }), {}
    );

    return props => {
      previous = template({ ...props, ...state, methods: mappedMethods(props), ...mappedWatchers(props) });
      console.log(previous)
      return previous;
    }
};

// Handle events that occur on the DOM
export const onClick = f => ({
  type: "event",
  click: f
});

const initialStates = {
  template: "",
  on: {}
};

const createReducer = args => (acc, currentString, index) => {
  
  if (args[index]?.type === "event") {
    return { ...acc, on: { click: args[index].click }};
  }

  return {
    ...acc,
    template: acc.template + currentString + (args[index] || "")
  };
};

const createElement = tagName => (strings, ...args) => {
  // console.log(strings, ...args)
  const { template, on } = strings.reduce(createReducer(args), initialStates);

  // Create the DOM element 
  const element = document.createElement(tagName);
  
  // Apply the text node

  if (on?.click) element.addEventListener("click", on.click);
  element.appendChild(document.createTextNode(template))
  return {
    type: "element",
    template: element
  }
}

export const div    = createElement("div");
export const p      = createElement("p");
export const button = createElement("button");
