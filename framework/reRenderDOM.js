export function reRenderDOM(tagName, updatedContent, index) {
  // TODO: Make this more dynamic and less one use or path
  const elements = Array.from(document.getElementsByTagName(tagName))
  if (elements && elements[index]) {
    const element = elements[index];
    element.textContent = updatedContent;
  }
}