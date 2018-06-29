import React, { Component } from 'react';
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types"

class Projects extends Component {

    deleteProject(id) {
        this.props.onDelete(id)
    }

    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                // console.log(project)
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} projects={project}/>
                );
            })

        }

        return (
            <div className="Projects">
                <h1 className="">Latest Projects {this.props.test}</h1>
                <hr/>
                {projectItems}

            </div>
        );
    }

}

Projects.propTypes ={
    onDelete: PropTypes.func,
    projects:PropTypes.array
}


export default Projects;
