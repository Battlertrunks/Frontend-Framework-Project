function createElement(tagName, props, ...children) {
  if (tagName) {
    const tagElement = document.createElement(tagName);
    
    if (children.length) {
      for (let i = 0; i < children.length; i++) {
        if (children[i] === "p") {
          const childElement = document.createElement(children[i])
          const textNode = document.createTextNode("I am a child p element");

          childElement.append(textNode);
          tagElement.appendChild(childElement);
        }
      }
    }

    return tagElement;
  }
}

function createTextElement(text) {

}

// TODO Make the renderer!!!
function render(component) {
  const dom = document.getElementById("app");

  const formattedDOM = createElement("div", {}, "p");
  console.log(formattedDOM);

  dom.append(formattedDOM)
}

const CoolComponent = () => {
  
}

render();

// Store element component
// render onto the root element

// Update DOM method

// Create the element and text element

// Set state

// Update State

// Retrieve event handlers (onClick...)
