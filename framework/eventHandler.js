/**
 * Handle events that occur on the DOM
 * @param {CallableFunction} f - Stores the function on the onClick event handler 
 * @returns {Object} - The type of attribute is an event and the method for when user clicks the element
 */
export const onClick = f => ({
  type: "event",
  click: f
});