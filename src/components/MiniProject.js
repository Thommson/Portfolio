import React, { Component } from 'react';

class MiniProject extends Component {
    selectProject(){
      this.props.setActiveProject(this.props.project)
    }
    render() {
      const {project} = this.props
      return(
          <li onClick={this.selectProject.bind(this)} className="col mini-project">
            <h5>{project.number}</h5>
            <img src={project.imgDesk} alt=""/>
          </li>
      )
    }
}

export default MiniProject;
