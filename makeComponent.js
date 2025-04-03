export const init = (selector, component) => {
  const app = document.querySelector(selector);
  console.log(app)
  console.log(component)
  component.forEach(template => {
    app.appendChild(template.template)
  });
};

let state = {};

export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => {
  state = initialState;
  let previous;
  console.log(template)
  const mappedMethods = props =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          console.log(methods[key], state, args)
          state = methods[key](state, ...args);
          console.log(state)
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props)
          });
          
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
      previous = template({ ...props, ...state, methods: mappedMethods(props) });
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
