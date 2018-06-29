import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import AddProject from "./AddProject";
import uuid from "uuid"
import $ from "jquery"

class App extends Component {

    constructor(props){
        super(props);
        this.state= {
            projects: [],
            todos:[]
        }
    }

    getTodos (){
       $.ajax({
           url:'https://jsonplaceholder.typicode.com/todos',
           dataType:'json',
           cache:false,
           success:function(data){
             this.setState({todos:data},function(){
                 console.log(this.state)
             })
           }.bind(this),
           error:function(xhr,sta,err){
               console.log(err)
           }
       })
    }

    getProjects(){
        this.setState({projects:[        {
                id:uuid.v4(),
                title:"new",
                category:"web"
            },
                {
                    id:uuid.v4(),
                    title:"newq",
                    category:"Sndroid"
                }
            ]})
    }

    componentWillMount(){
        this.getProjects()
        this.getTodos()
    }

    componentDidMount(){
       this.getTodos()
    }

    handleAddProject(project){
       //console.log(project)
        let projects=this.state.projects;
        projects.push(project);

        this.setState({projects})
    }

    handleDeleteProject(id){
        let projects=this.state.projects;
        let index=projects.findIndex(x=> x.id === id)
        projects.splice(index,1);
        this.setState({projects})
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <AddProject  addProject={this.handleAddProject.bind(this)}/>
          <Projects   test="Hello"  projects={this.state.projects}  onDelete={this.handleDeleteProject.bind(this)} />
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
