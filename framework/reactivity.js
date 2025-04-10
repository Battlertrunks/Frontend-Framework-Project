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

export function effect(callback) {
  effectCallback = callback;
  effectCallback();
  effectCallback = null;
}
