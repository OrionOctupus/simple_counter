import React from 'react';
// import s from './Todolist.module.css';
import Header from './Header';
import Todo from './Todo';
import Form from './Form';
import Button from './Button';


class Todolist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showT: true
        }
    }

    render() {
        return (
            <div className='container'>
                <Header title={this.props.title} todos={this.props.todos} showT={this.state.showT} />
                <section className='todoTitle'>
                    {this.props.todos.map(item => {
                        return <Todo
                            key={item.id}
                            id={item.id}
                            text={item.title}
                            completed={item.completed}
                            onStatusChange={this.props.onStatusChange}
                            onDelete={this.props.handleDelete}
                            onEdit={this.props.onEdit}
                        />
                    })}
                </section>
                <Form onAdd={this.props.handleAdd} />
                <Button className='icon show' icon='visibility' onClick={() => this.setState({ showT: !this.state.showT })} />
            </div>
        )
    }
}

// ?????
// Todolist.propTypes = {
//     title: React.PropTypes.string
// };

Todolist.defaultProps = {
    title: 'Default Title'
};

export default Todolist;