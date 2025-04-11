/**
 * Create the element in a component based on the arguments
 * @param {string} tagName - the tag type of the element
 * @returns {Object} - The type of element and the template contents
 */
const createElement = tagName => (strings, ...args) => {
  const { template, on } = strings.reduce((acc, curString, index) => {
    
    if (args[index]?.type === "event") {
      return {
        ...acc,
        on: { click: args[index].click }
      }
    }

    return {
      ...acc,
      template: acc.template + curString + (typeof args[index] === "function" ? args[index]()
        : typeof args[index] === "undefined" ? "" : args[index])
    };
  } , { template: "", on: {} });

  // Create the DOM element 
  const element = document.createElement(tagName);

  if (on?.click) element.addEventListener("click", on.click);
  element.appendChild(document.createTextNode(template))
  return {
    type: "element",
    template: element
  };
};

export const p      = createElement("p");
export const button = createElement("button");