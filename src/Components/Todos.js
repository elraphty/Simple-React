import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types"

class Todos extends Component {

    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                // console.log(project)
                return (

                    <TodoItem  key={todo.id} todos={todo}/>

                );
            })

        }

        return (
            <div className="Projects">

                <h1 className="">Todos</h1>
                <hr/>
                {todoItems}

            </div>
        );
    }

}

Todos.propTypes ={

}

export default Todos;
