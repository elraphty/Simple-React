import React, { Component } from 'react';

class TodoItem extends Component {
    deleteProduct(id){
        // console.log('this')
        this.props.onDelete(id);
    }

    render() {
        return (
            <p className="Project">
                {this.props.todos.title} - {this.props.todos.userId}
            </p>
        );
    }
}

export default TodoItem;
