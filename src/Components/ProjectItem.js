import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProduct(id){
      // console.log('this')
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="Project">
                {this.props.projects.title} - {this.props.projects.category} <button type="button" onClick={this.deleteProduct.bind(this,this.props.projects.id)}>X</button>
            </li>
        );
    }
}

export default ProjectItem;
