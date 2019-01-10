import React, { Component } from 'react';

class ActiveProject extends Component {
    render() {
      return(
        <div id="selectedProject">
            <div className="selected-project-area row project-mob">
              <div className='col-3'>
                <img src={this.props.activeProject.imgMob} alt=""/>
              </div>
              <div className="col-9">
                <img src={this.props.activeProject.imgDesk} alt=""/>
              </div>
              <a href={this.props.activeProject.link} target="_blank" className={[this.props.activeColor, "project-number"].join(' ')}><h2 className="center number-font">{this.props.activeProject.number}</h2></a>
            </div>
        </div>
      )
    }
}

export default ActiveProject;
