import React from 'react';
import s from './App.module.css';
// import Store from './store';
import Counter from './Counter';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className={s.app}>
        <Counter />
      </div>
    )
  }
}

export default App;
