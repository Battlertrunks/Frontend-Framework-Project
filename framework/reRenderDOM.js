/**
 * Re-render the part of the DOM that has updated
 * TODO: Refactor this logic to be more dynamic and maintainable
 * @param {string} tagName - The element's type
 * @param {string} updatedContent - The new content to update the element to
 * @param {number} index - The position of the element, need to refactor this the most
 */
export function reRenderDOM(tagName, updatedContent, index) {
  // TODO: Make this more dynamic and less one use or path
  const elements = Array.from(document.getElementsByTagName(tagName))
  if (elements && elements[index]) {
    const element = elements[index];
    element.textContent = updatedContent;
  }
}