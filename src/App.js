import React from 'react';
import s from './App.module.css';
// import Store from './store';
import { createStore } from 'redux';


const initialState = { count: 3 };

function reducer(state = { count: 0 }, action) { // createStore - прежнее название
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + +action.amount };
    case 'DECREMENT': return { count: state.count - action.amount };
    case 'RESET': return initialState;
    default: return state;
  }
}

// const incrementAction = { type: 'INCREMENT', amount: 3 };
// const decrementAction = { type: 'DECREMENT', amount: 5 };
// const resetAction = { type: 'RESET' };

//AC - action creator

function incrementAC(amount) {
  return { type: 'INCREMENT', amount: amount };
};

function decrementAC(amount) {
  return { type: 'DECREMENT', amount: amount };
};

function resetAC() {
  return { type: 'RESET' };
};

const store = new createStore(reducer, initialState); // это наш объект ,импортируемый из /store -> зетем заменяем название Store на createStore

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
    let amount = this.refs.amount.value;
    store.dispatch(incrementAC(amount)); // update -> dispatch
  }

  decrement() {
    // this.setState({ count: this.state.count - 1 });
    let amount = this.refs.amount.value;
    store.dispatch(decrementAC(amount));
  }

  reset() {
    store.dispatch(resetAC());
  }
  // state -> getState()
  render() {
    const count = store.getState().count;
    return (
      <div className={s.counter}>
        <span className={s.count}>{count}</span>

        <div className={s.buttons}>
          <button className={s.decrement} onClick={this.decrement}>-</button>
          <button className={s.reser} onClick={this.reset}>R</button>
          <button className={s.increment} onClick={this.increment}>+</button>
        </div>
        <input type="number" ref='amount' defaultValue="1" />
      </div>
    )
  }
}

export default App;
