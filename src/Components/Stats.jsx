import React from 'react';

function Stats(props) {
    let total = props.todos.length;
    let completed = props.todos.filter(item => item.completed).length;

    return (
        <table className='stats'>
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Выполнено:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Осталось:</th>
                    <td>{total - completed}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats;