import React from 'react';
import s from './App.module.css';
import Store from './store';

const initialState = { count: 4 };

function updateState(state, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + action.amount };
    case 'DECREMENT': return { count: state.count - action.amount };
    case 'RESET': return initialState;
    default: return state;
  }
}

const incrementAction = { type: 'INCREMENT', amount: 3 };
const decrementAction = { type: 'DECREMENT', amount: 5 };
const resetAction = { type: 'RESET' };

const store = new Store(updateState, initialState); // это наш объект импортируемый из /store

class App extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    // this.setState({ count: this.state.count + 1 });
    store.update(incrementAction);
  }

  decrement() {
    // this.setState({ count: this.state.count - 1 });
    store.update(decrementAction);
  }

  reset() {
    store.update(resetAction);
  }

  render() {
    return (
      <div className={s.counter}>
        <span className={s.count}>{store.state.count}</span>

        <div className={s.buttons}>
          <button className={s.decrement} onClick={this.decrement}>-</button>
          <button className={s.reser} onClick={this.reset}>R</button>
          <button className={s.increment} onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default App;
