import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

function Todo(props) {
    function handleChange() {
        props.onStatusChange(props.id);
    }
    return (
        <div className={`todo ${props.completed ? 'completed' : null}`}>
            <Checkbox onChange={handleChange} completed={props.completed} />

            <span className='todoTitle'>{props.text}</span>

            <Button icon='delete' className='delete icon' onClick={() => props.onDelete(props.id)} />
        </div>
    )
}

export default Todo;

// короткая зипись, чтоб не создавать лишнюю функция
// {/* <Checkbox onChange={()=> props.onStatusChange(props.id)} completed={props.completed} /> */ }