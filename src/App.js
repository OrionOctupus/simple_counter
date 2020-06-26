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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
    let todos = this.state.todos.filter(item => item.id !== id);
    console.log(id);
    this.setState({ todos: todos });
  }

  handleAdd(title) {
    let todo = {
      id: this.nextId(),
      title: title,
      completed: false
    };

    let todos = [...this.state.todos, todo];

    this.setState({ todos: todos });
  }

  nextId() {
    this._nextId = this._nextId || 6;
    return this._nextId++;
  }

  handleEdit(id, title) {
    let todos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.title = title;
      }

      return item;
    });

    this.setState({ todos });
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
          handleAdd={this.handleAdd}
          onEdit={this.handleEdit}
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
