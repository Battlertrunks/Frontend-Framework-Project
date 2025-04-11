/**
 * The scaffolding of how state is set and retrieved
 */
class Signal {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
    this._emit();
  }

  _emit() {
    this.subscribers.forEach(subscribe => subscribe(this.value));
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }
}

let effectCallback = null;

/**
 * Callable function for components to create their reactive state
 * @param {any} value - The value that is stored in reactive state
 * @returns {any} - The state's value upon calling the value function
 */
export function createSignal(value) {
  const signal = new Signal(value);

  return [
    function value() {
      if (effectCallback) signal.subscribe(effectCallback);

      return signal.getValue();
    },
    function setValue(newValue) {
      signal.setValue(newValue);
    }
  ]
}

/**
 * Executes effect/computed props upon state change
 * @param {CallableFunction} callback - The method of computed logic in the component
 */
export function effect(callback) {
  effectCallback = callback;
  effectCallback();
  effectCallback = null;
}
