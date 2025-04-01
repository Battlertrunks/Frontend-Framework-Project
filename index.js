function createElement(tagName, props, children) {
  if (tagName) {
    console.log(tagName, props, children)

    const tagElement = document.createElement(tagName);
    
    if (props.text) {
      const textNode = document.createTextNode(props.text);
      tagElement.append(textNode);
    }

    for (const child of children) {
      console.log(child, child.attributes, child.children)
      const childElement = createElement(child.parent, child.attributes, child.children);
      console.log(childElement);
      tagElement.appendChild(childElement);
    }

    return tagElement;
  }
}

function createTextElement(text) {

}

// TODO Make the renderer!!!
function render(component) {
  console.log(component)
  const dom = document.getElementById("app");

  const formattedDOM = createElement(component.parent, component.attributes, component.children);
  console.log(formattedDOM);

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
          text: "I am a cool component"
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
    ]
  }
}

const componentData = CoolComponent();
render(componentData);

// Store element component
// render onto the root element

// Update DOM method

// Create the element and text element

// Set state

// Update State

// Retrieve event handlers (onClick...)
