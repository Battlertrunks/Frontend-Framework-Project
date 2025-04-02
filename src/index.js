import * as htmlparser2 from "htmlparser2";

/**
 * Recursively apply the elements from the component to the parent element of the component
 * @param {string} tagName - The HTML element to be used on the specific tree
 * @param {Object} props - Props the element would contain
 * @param {Object[]} children - Child element(s) of the parent element (if any)
 * @returns {Object} - The element that was constructed
 */
function applyNode(domTree) {
  console.log(domTree)
  if (domTree) {
    const tagElement = document.createElement(domTree.tag);
    
    // If the element contains text in the attribute, add text to the element
    if (domTree.attributes.text) {
      tagElement.append(applyingNodeText(domTree.attributes.text));
    }


    for (const child of domTree.children) {
      // Recursively create the child element, its attributes, and recursively for the children too
      const childElement = applyNode(child);
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
 * 
 * @param {HTMLBodyElement} htmlBlock 
 */
function htmlToObject(htmlBlock) {  
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlBlock, 'text/html').body.childNodes[0];

  console.log(doc)
  
  /**
   * 
   * @param {HTMLElement} node 
   */
  function traverseNode(node) {
    console.log(node.type);

    const nodalObj = {
      tag: node.tagName?.toLowerCase(),
      attributes: {
        text: node.textContent || "",
      },
      children: []
    }

    if (node.hasAttributes()) {
      console.log('has attribute');
    }

    if (node.hasChildNodes()) {
      for (const child of node.childNodes) {
        if (child.nodeName !== "#text") {
          nodalObj.children.push(traverseNode(child));
        }
      }
    }

    return nodalObj;
  }

  return traverseNode(doc);
}

/**
 * Apply the elements to form the node tree of the DOM to then be rendered to the page
 * @param {Object} component - The tree to build to the DOM
 */
function render(component) {
  const dom = document.getElementById("app");

  const domTree = htmlToObject(component);
  const formattedDOM = applyNode(domTree);

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

const templateLiteralComponent = () => {
  return (
    `
    <div>
      <p>Counter: <span>TEMP NUM</span></p>
      <button>Add 1</button>
    </div>
    `
  )
};

const componentData = templateLiteralComponent();
render(componentData);


// -------- Planning -----------
// Store element component
// render onto the root element

// Update DOM method

// Create the element and text element

// Set state

// Update State

// Retrieve event handlers (onClick...)
