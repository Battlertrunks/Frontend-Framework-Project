/**
 * Recursively apply the elements from the component to the parent element of the component
 * @param {string} tagName - The HTML element to be used on the specific tree
 * @param {Object} props - Props the element would contain
 * @param {Object[]} children - Child element(s) of the parent element (if any)
 * @returns {Object} - The element that was constructed
 */
function applyNode(tagName, props, children) {
  if (tagName) {
    const tagElement = document.createElement(tagName);
    
    // If the element contains text in the attribute, add text to the element
    if (props.text) {
      tagElement.append(applyingNodeText(props.text));
    }

    for (const child of children) {
      // Recursively create the child element, its attributes, and recursively for the children too
      const childElement = applyNode(child.parent, child.attributes, child.children);
      tagElement.appendChild(childElement);
    }

    // Return the Node tree to then be rendered to the user
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

  const formattedDOM = applyNode(component.parent, component.attributes, component.children);

  // TODO:
  // Will come back to this since we could have more than one component at a time
  dom.append(formattedDOM)
}

const CoolComponent = () => {
  return {
    parent: "div",
    attributes: {
      text: ""
    },
    children: [
      {
        parent: "p",
        attributes: {
          text: "Counter: "
        },
        children: [
          {
            parent: "span",
            attributes: {
              text: "I AM SPAN!"
            },
            children: []
          }
        ]
      },
      {
        parent: "button",
        attributes: {
          text: "Add 1"
          // Need to make a event listener to track button clicks
        },
        children: []
      }
    ]
  }
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
