import React from 'react';
import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "hi"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let title = this.state.title;


        if (title) {
            this.props.onAdd(title);
            this.setState({
                title: ' '
            })
        }

        console.log(title);
    }

    handleChange(e) {
        let title = e.target.value;
        this.setState({
            title
        })

        console.log(this.state.title);
    }

    render() {
        return (
            <form action="" className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder='Что нужно сделать?'
                    onChange={this.handleChange}
                />

                <Button type='submit' >Добавить</Button>
            </form>
        )
    }
}

export default Form; 