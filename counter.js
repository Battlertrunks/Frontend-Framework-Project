import { createComponent, div, p, button, onClick } from "./makeComponent.js";

class Counter {
  constructor() {
    this.state = {
      name: 'I am counter',
      count: 1
    };
  }

  methods = {
    addCount: (state) => {
      console.log('pressed',);
      return ({ ...state, count: state.count+=1 })
    }
  };

  template({ name, count, methods }) {
    return [
      div`Hello, ${name}`,
      p`This is just text, ${count}`,
      button`${onClick(() => methods.addCount())}Add one`
    ]
  }
}

const counter = new Counter();
export const CounterComponent = createComponent({ template: counter.template, methods: counter.methods, initialState: counter.state })
