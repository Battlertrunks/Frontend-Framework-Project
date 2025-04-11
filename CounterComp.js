import { reRenderDOM } from "./framework/reRenderDOM.js";
import { createSignal, effect } from "./framework/reactivity.js";
import { p, button } from "./framework/createElements.js";
import { onClick } from "./framework/eventHandler.js";

/**
 * Component of the counter we can increase number and display the number
 * @returns {Object[]} - Object of the tag and template
 */
export function CounterComponent() {
  // Scaffold the state
  const [value, setValue] = createSignal(1);
  let grandTotal = 0;

  const addCount = () => {
    setValue(value() + 1);
    // Same as TODO in this method, make this better 
    reRenderDOM("p", `sup, ${value()}`, 0)
  };

  // TODO
  // Make a effect / computed property
  effect(() => {
    grandTotal = value() * 5;
    reRenderDOM("p", `total, ${grandTotal}`, 1)
  });

  return [
    p`sup, ${value}`,
    p`total: ${grandTotal}`,
    button`${onClick(() => addCount())}Add 1`
  ];
}