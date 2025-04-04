import { createComponent, div, p, button, onClick } from "./makeComponent.js";
// POSSIBILITY: May try to redo or re-plan making hte framework from current bottle necks...

class Counter {
  constructor() {
    this.state = {
      name: 'I am counter',
      count: 1,
      multiplier: 10
    };
    this.instance = this;
  }

  methods = {
    addCount: (state) => {
      console.log(state);
      return ({ ...state, count: state.count+=1 })
    }
  };

  watchers = {
    multiplier: {
      get(multiplier, count) {
        return multiplier * count
      }
    }
  }

  template({ name, count, multiplier, methods }) {
    console.log(multiplier)
    return [
      div`Hello, ${name}`,
      p`This is just text, ${count}`,
      // TODO:
      // Very manual watcher/effect, would like to refactor this to be better later on
      p`Multiplied ${multiplier.get ? multiplier.get(10, count) : count * 10}`,
      button`${onClick(() => methods.addCount())}Add one`
    ]
  }
}

const counter = new Counter();
export const CounterComponent = createComponent({ template: counter.template, methods: counter.methods, watchers: counter.watchers, initialState: counter.state })
