import React, { Component } from 'react';

//Components
import Navbar from '../Navbar';
import ActiveProject from '../ActiveProject';
import SvgBackground from '../SvgBackground';
import MiniProject from '../MiniProject';
import ColorPicker from '../ColorPicker';
import TextArea from '../TextArea'
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeColor: "blue",
      Colors:[
      {
        color: "red"
      },
      {
        color: "blue"
      },
      {
        color: "green"
      }
    ],
      activeProject:{
        id: 0,
        number: "Hi",
        name: "Hi, I'm Tom",
        description: "A second-year student of Multimedia Design and Communication who is passionate about learning new technologies. My goal is to become a Web Developer! Currently I am focusing on React, React Native and Redux. Here are some of my university projects.",
        imgMob: "images/cardPhoto.jpg",
        imgDesk: "images/vilnius.jpg",
        width: "p0"
      },
      allProjects: [
        {
          id: 0,
          number: "Hi",
          name: "Hi, I'm Tom",
          description: "A second-year student of Multimedia Design and Communication who is passionate about learning new technologies. My goal is to become a Web Developer! Here are some of my university projects.",
          imgMob: "images/cardPhoto.jpg",
          imgDesk: "images/vilnius.jpg",
          width: "p0"
        },
        {
          id: 1,
          number: '01',
          name: "StudyLife",
          description: "StudyLife is a student organization that searches and creates events. Worked on creating a filtering system that could draw information from a CMS with the use of JSON and load it in dynamically with the use of AJAX.",
          link: "http://des-iis.ucn.dk/mmdi0917/1067667/StudyLife/",
          imgMob: "images/studylifecard.jpg",
          imgDesk: "images/studylifedesk.jpg",
          techUsed: "",
          warn: "I no longer have access to the CMS so it might not work as intended.",
          width: "p25"
        },
        {
          id: 2,
          number: '02',
          name: "Guldsmed Apel",
          description: "Collaborated in a team of 4 where we create a website that loads content dynamically from a WordPress as a Headless CMS.",
          link: "http://des-iis.ucn.dk/mmdi0917/1067667/Guldsmed_Apel/",
          imgMob: "images/guldsmedcard.jpg",
          imgDesk: "images/gulddesk.jpg",
          warn: "I no longer have access to the CMS so it might not work as intended.",
          width: "p50"
        },
        {
          id: 3,
          number: '03',
          name: "Saeby Chiropractic",
          description: "Developed in contact with the owners of the original website. The objective was to have a full re-design of the website and make it responsive and mobile friendly.",
          link: "http://des-iis.ucn.dk/mmdi0917/1067667/Group_7_Kiropraktik/",
          imgMob: "images/saebycard.jpg",
          imgDesk: "images/saebydesk.jpg",
          techUsed: "",
          width: "p75"
        },
        {
          id: 4,
          number: '04',
          name: "Elviole",
          description: "First Independent project. Contributed to the UX/UI and Communication of the website in a remote work environment.",
          link: "http://www.elviole.lt/",
          imgMob: "images/elviolecard.jpg",
          imgDesk: "images/elvioledesk.jpg",
          width: "p100"
        }
      ]
      }
    this.nextProject = this.nextProject.bind(this);
    this.prevProject = this.prevProject.bind(this);
  }
  setColor(selectedColor){
    this.setState({
      activeColor: selectedColor
    })
  }
  setActiveProject(selectedProject){
    this.setState({
      activeProject: selectedProject
    })
  }
  nextProject(){
    if(this.state.activeProject.id >= 4){
      this.setState({
        activeProject: this.state.allProjects[0]
      })
    } else {
      this.setState({
        activeProject: this.state.allProjects[this.state.activeProject.id + 1]
      })
    }
  }
  prevProject(){
    if(this.state.activeProject.id <= 0){
      this.setState({
        activeProject: this.state.allProjects[4]
      })
    } else {
      this.setState({
        activeProject: this.state.allProjects[this.state.activeProject.id - 1]
      })
    }
  }
  render(){
    return(
      <div className="container-fluid">
        <SvgBackground activeColor={this.state.activeColor} />
        <div className="container-padding">
          <Navbar />
          <div className="row screen-view">
            <section className="col-4 about">
              <TextArea activeProject={this.state.activeProject}/>
              <div className="color-picker">
              {this.state.Colors.map((color, index)=>{
                return <ColorPicker setColor={this.setColor.bind(this)} color={color} id={index} key={index} value={index} />
              })}
              </div>
            </section>
            <section className="col-8">
              <div id="projectMenu">
                <ActiveProject activeColor={this.state.activeColor} activeProject={this.state.activeProject}/>
                <ul id="projectList" className="row">
                {this.state.allProjects.map((project, index)=>{
                  return <MiniProject setActiveProject={this.setActiveProject.bind(this)} activeColor={this.state.activeColor} project={project} id={index} key={index} value={index} />
                })}
                </ul>
                <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col text-center">{this.state.activeProject.name}</div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <button className="navigation-button" onClick={this.prevProject}><img src="images/smallarrow.png" className="arrow" alt=""/>Prev</button>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                      <div className="progress">
                        <div className={[this.state.activeProject.width, this.state.activeColor, "progress-bar"].join(' ')} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-2 text-right">
                      <button className="navigation-button" onClick={this.nextProject}>Next<img src="images/smallarrow.png" className="arrow-right" alt=""/></button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
