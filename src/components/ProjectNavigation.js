import React, { Component } from 'react';

class ProjectNavigation extends Component {
    render() {
      const {project} = this.props
      return(
        <div className="row">
        <div className="col">
          <div className="row">
            <div className="col text-center">current num and name</div>
          </div>
          <div className="row">
            <div className="col-2">
              <button>Prev</button>
            </div>
            <div className="col"></div>
            <div className="col-4">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col"></div>
            <div className="col-2 text-right">
              <button>Next</button>
            </div>
          </div>
        </div>
        </div>
      )
    }
}

export default ProjectNavigation;
