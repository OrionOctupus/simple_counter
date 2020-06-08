import React from 'react';
import s from './App.module.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className={s.counter}>
        <span className={s.count}>{this.state.count}</span>

        <div className={s.buttons}>
          <button className={s.decrement} onClick={this.decrement}>-</button>
          <button className={s.increment} onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default App;
