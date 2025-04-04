/**
 * Recursively apply the elements from the component to the parent element of the component
 * @param {string} tagName - The HTML element to be used on the specific tree
 * @param {Object} props - Props the element would contain
 * @param {Object[]} children - Child element(s) of the parent element (if any)
 * @returns {Object} - The element that was constructed
 */
function applyNode(tagName, text, initialState, props, children) {
  if (tagName) {
    const tagElement = document.createElement(tagName);
    
    // If the element contains text in the attribute, add text to the element
    if (text) {
      tagElement.append(applyingNodeText(text));
    }

    let state = initialState

    const mappedMethods = methods =>
      Object.keys(props).length ? Object.keys(props).reduce((acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
        }
      }), {}) : {}

    for (const child of children) {
      // Recursively create the child element, its attributes, and recursively for the children too
      const childElement = applyNode(child.parent, child.text, state, child.attributes, child.children);

      tagElement.appendChild(childElement);
    }

    // Return the Node tree to then be rendered to the user
    const methodz = mappedMethods(props);
    if (methodz.on) {
      tagElement.addEventListener('click', methodz.on)
    }
    return tagElement;
  }
}

/**
 * Apply text to the node if they have text within their properties
 * @param {string} text - The text that will be appended to the element
 * @returns {Object} - The text that is created from the text node
 */
function applyingNodeText(text) {
  return document.createTextNode(text);
}

/**
 * Apply the elements to form the node tree of the DOM to then be rendered to the page
 * @param {Object} component - The tree to build to the DOM
 */
function render(component) {
  const dom = document.getElementById("app");

  const formattedDOM = applyNode(component.parent, component.text, component.state, component.attributes, component.children);

  // TODO:
  // Will come back to this since we could have more than one component at a time
  dom.append(formattedDOM)
}

const CoolComponent = () => {
  const state = {
    count: 0
  }

  const template = {
    parent: "div",
    state,
    text: "",
    attributes: {},
    children: [
      {
        parent: "p",
        text: "Counter: ",
        attributes: {},
        children: [
          {
            parent: "span",
            text: `${state.count}`,
            attributes: {},
            children: []
          }
        ]
      },
      {
        parent: "button",
        text: "Add 1",
        attributes: {
          on() {
            state.count++;
            console.log(template)
            render(template)
          }
          // Need to make a event listener to track button clicks
        },
        children: []
      }
    ]
  }

  return template;
}

const componentData = CoolComponent();
render(componentData);


// -------- Planning -----------
// Store element component
// render onto the root element

// Update DOM method

// Create the element and text element

// Set state

// Update State

// Retrieve event handlers (onClick...)
