import React from 'react';
import s from './App.module.css';
// import Store from './store';
import Counter from './Components/Counter/Counter';
import Todolist from './Components/Todolist';
import todos from './todos';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    }

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleStatusChange(id) {
    let todos = this.state.todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      console.log(this.state);
      return item;
    })

    this.setState({ todos: todos });
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    console.log(id);
    this.setState({ todos: todos });
  }

  render() {
    console.log('перерисовка')
    return (
      <div className={s.app}>
        <Todolist
          title="React Todo"
          todos={this.state.todos}
          onStatusChange={this.handleStatusChange}
          handleDelete={this.handleDelete}
        />
        {/* <Counter /> */}
      </div>
    )
  }
}

// Todolist.propTypes = {
//   title: React.PropTypes.string
// };



export default App;
