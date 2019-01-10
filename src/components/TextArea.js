import React, { Component } from 'react';

class TextArea extends Component {

  render(){
    return(
      <div className="text-area row">
        <div className="row">
          <h1 className="col">{this.props.activeProject.name}</h1>
        </div>
        <div className="row">
        <p className="col">{this.props.activeProject.description}</p>
        </div>
        {this.props.activeProject.warn ?
          <div className="row">
          <span className="col"><img src="images/alert.png" className="warn" alt=""/>{this.props.activeProject.warn}</span>
          </div>
          : ""}
        {this.props.activeProject.link ?
        <div className="row">
          <button className="link-button col"><a href={this.props.activeProject.link} target="_blank">Visit Page</a></button>
        </div>
        : ""}
      </div>
    );
  }
}
export default TextArea;
