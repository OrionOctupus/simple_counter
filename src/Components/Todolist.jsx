import React from 'react';
// import s from './Todolist.module.css';
import Header from './Header';
import Todo from './Todo';
import Form from './Form';


function Todolist(props) {

    return (
        <div className='container'>
            <Header title={props.title} todos={props.todos} />
            <section className='todoTitle'>
                {props.todos.map(item => {
                    return <Todo
                        key={item.id}
                        id={item.id}
                        text={item.title}
                        completed={item.completed}
                        onStatusChange={props.onStatusChange}
                        onDelete={props.handleDelete}
                        onEdit={props.onEdit}
                    />
                })}
            </section>
            <Form onAdd={props.handleAdd} />
        </div>
    )
}

// ?????
// Todolist.propTypes = {
//     title: React.PropTypes.string
// };

Todolist.defaultProps = {
    title: 'Default Title'
};

export default Todolist;