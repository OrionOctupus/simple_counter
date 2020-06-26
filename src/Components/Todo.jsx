import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

    handleChange() {
        this.onStatusChange(this.id);
    }

    renderDisplay() {
        return (
            <div className={`todo ${this.props.completed ? 'completed' : null}`}>
                <Checkbox onChange={this.props.handleChange} completed={this.props.completed} />

                <span className='todoTitle'>{this.props.text}</span>
                <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing: true })} />
                <Button icon='delete' className='delete icon' onClick={() => this.props.onDelete(this.props.id)} />
            </div>
        )
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.text} />
                <Button className='save icon' icon='save' type='submit' />
            </form>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Todo;

// короткая зипись, чтоб не создавать лишнюю функция
// {/* <Checkbox onChange={()=> props.onStatusChange(props.id)} completed={props.completed} /> */ }