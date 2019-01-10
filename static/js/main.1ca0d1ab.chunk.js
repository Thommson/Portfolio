(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(13),r=a(2),s=a(3),o=a(5),l=a(4),m=a(6),d=a(10),p=a(28),u=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement(p.a,{to:"/",className:"navbar-brand logo"},i.a.createElement("h3",{className:"bold-text"},"Sedurskas.me")),i.a.createElement("ul",{className:"nav justify-content-end"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(p.a,{to:"/",className:"nav-link active"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link disabled",href:"https://github.com/Thommson/"},"Github"))))}}]),t}(c.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"selectedProject"},i.a.createElement("div",{className:"selected-project-area row project-mob"},i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:this.props.activeProject.imgMob,alt:""})),i.a.createElement("div",{className:"col-9"},i.a.createElement("img",{src:this.props.activeProject.imgDesk,alt:""})),i.a.createElement("a",{href:this.props.activeProject.link,target:"_blank",className:[this.props.activeColor,"project-number"].join(" ")},i.a.createElement("h2",{className:"center number-font"},this.props.activeProject.number))))}}]),t}(c.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("svg",{className:"svg-position",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 963"},i.a.createElement("path",{id:"_x33_00up",className:this.props.activeColor,d:"M1920,0v963H620c0,0,12-368,384-674C1338.13,14.15,1920,0,1920,0z"})),i.a.createElement("svg",{className:"svg-position",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 963"},i.a.createElement("path",{id:"_x31_50up",className:this.props.activeColor,d:"M1920,0v963H620c0,0,131.01-287.49,508-583C1475,108,1920,0,1920,0z"})),i.a.createElement("svg",{className:"svg-position",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 963"},i.a.createElement("path",{id:"_x30_",className:this.props.activeColor,d:"M1917,0v963H617c0,0,515.83-382.05,698-517C1457.83,340.2,1917,0,1917,0z"})),i.a.createElement("svg",{className:"svg-position",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 963"},i.a.createElement("path",{id:"_x31_50_down",className:this.props.activeColor,d:"M1920,0v963H620c0,0,463-86,791-374C1715.86,321.32,1920,0,1920,0z"})),i.a.createElement("svg",{className:"svg-position",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 963"},i.a.createElement("path",{id:"_x33_00_down",className:this.props.activeColor,d:"M1920,0v963H620c0,0,700.88-37.24,948-259C1870,433,1920,0,1920,0z"})),i.a.createElement("svg",{className:"svg-position",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 963"},i.a.createElement("path",{id:"_x34_50_down",className:this.props.activeColor,d:"M1920,0v963H620c0,0,914.38,20.99,1098-149C1920,627,1920,0,1920,0z"})))}}]),t}(c.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"selectProject",value:function(){this.props.setActiveProject(this.props.project)}},{key:"render",value:function(){var e=this.props.project;return i.a.createElement("li",{onClick:this.selectProject.bind(this),className:"col mini-project"},i.a.createElement("h5",null,e.number),i.a.createElement("img",{src:e.imgDesk,alt:""}))}}]),t}(c.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"selectColor",value:function(){this.props.setColor(this.props.color.color)}},{key:"render",value:function(){return i.a.createElement("div",{className:"color-button"},i.a.createElement("button",{className:[this.props.color.color,"color-button-size"].join(" "),onClick:this.selectColor.bind(this)}))}}]),t}(c.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"text-area row"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",{className:"col"},this.props.activeProject.name)),i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"col"},this.props.activeProject.description)),this.props.activeProject.warn?i.a.createElement("div",{className:"row"},i.a.createElement("span",{className:"col"},i.a.createElement("img",{src:"images/alert.png",className:"warn",alt:""}),this.props.activeProject.warn)):"",this.props.activeProject.link?i.a.createElement("div",{className:"row"},i.a.createElement("button",{className:"link-button col"},i.a.createElement("a",{href:this.props.activeProject.link,target:"_blank"},"Visit Page"))):"")}}]),t}(c.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={activeColor:"blue",Colors:[{color:"red"},{color:"blue"},{color:"green"}],activeProject:{id:0,number:"Hi",name:"Hi, I'm Tom",description:"A second-year student of Multimedia Design and Communication who is passionate about learning new technologies. My goal is to become a Web Developer! Here are some of my university projects.",imgMob:"images/cardPhoto.jpg",imgDesk:"images/vilnius.jpg",width:"p0"},allProjects:[{id:0,number:"Hi",name:"Hi, I'm Tom",description:"A second-year student of Multimedia Design and Communication who is passionate about learning new technologies. My goal is to become a Web Developer! Here are some of my university projects.",imgMob:"images/cardPhoto.jpg",imgDesk:"images/vilnius.jpg",width:"p0"},{id:1,number:"01",name:"StudyLife",description:"StudyLife is a student organization that searches and creates events. Worked on creating a filtering system that could draw information from a CMS with the use of JSON and load it in dynamically with the use of AJAX.",link:"http://des-iis.ucn.dk/mmdi0917/1067667/StudyLife/",imgMob:"images/studylifecard.jpg",imgDesk:"images/studylifedesk.jpg",techUsed:"",warn:"I no longer have access to the CMS so it might not work as intended.",width:"p25"},{id:2,number:"02",name:"Guldsmed Apel",description:"Collaborated in a team of 4 where we create a website that loads content dynamically from a WordPress as a Headless CMS.",link:"http://des-iis.ucn.dk/mmdi0917/1067667/Guldsmed_Apel/",imgMob:"images/guldsmedcard.jpg",imgDesk:"images/gulddesk.jpg",warn:"I no longer have access to the CMS so it might not work as intended.",width:"p50"},{id:3,number:"03",name:"Saeby Chiropractic",description:"Developed in contact with the owners of the original website. The objective was to have a full re-design of the website and make it responsive and mobile friendly.",link:"http://des-iis.ucn.dk/mmdi0917/1067667/Group_7_Kiropraktik/",imgMob:"images/saebycard.jpg",imgDesk:"images/saebydesk.jpg",techUsed:"",width:"p75"},{id:4,number:"04",name:"Elviole",description:"First Independent project. Contributed to the UX/UI and Communication of the website in a remote work environment.",link:"http://www.elviole.lt/",imgMob:"images/elviolecard.jpg",imgDesk:"images/elvioledesk.jpg",width:"p100"}]},a.nextProject=a.nextProject.bind(Object(d.a)(Object(d.a)(a))),a.prevProject=a.prevProject.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setColor",value:function(e){this.setState({activeColor:e})}},{key:"setActiveProject",value:function(e){this.setState({activeProject:e})}},{key:"nextProject",value:function(){this.state.activeProject.id>=4?this.setState({activeProject:this.state.allProjects[0]}):this.setState({activeProject:this.state.allProjects[this.state.activeProject.id+1]})}},{key:"prevProject",value:function(){this.state.activeProject.id<=0?this.setState({activeProject:this.state.allProjects[4]}):this.setState({activeProject:this.state.allProjects[this.state.activeProject.id-1]})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement(h,{activeColor:this.state.activeColor}),i.a.createElement("div",{className:"container-padding"},i.a.createElement(u,null),i.a.createElement("div",{className:"row screen-view"},i.a.createElement("section",{className:"col-4 about"},i.a.createElement(g,{activeProject:this.state.activeProject}),i.a.createElement("div",{className:"color-picker"},this.state.Colors.map(function(t,a){return i.a.createElement(b,{setColor:e.setColor.bind(e),color:t,id:a,key:a,value:a})}))),i.a.createElement("section",{className:"col-8"},i.a.createElement("div",{id:"projectMenu"},i.a.createElement(v,{activeColor:this.state.activeColor,activeProject:this.state.activeProject}),i.a.createElement("ul",{id:"projectList",className:"row"},this.state.allProjects.map(function(t,a){return i.a.createElement(j,{setActiveProject:e.setActiveProject.bind(e),activeColor:e.state.activeColor,project:t,id:a,key:a,value:a})})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col text-center"},this.state.activeProject.name)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2"},i.a.createElement("button",{className:"navigation-button",onClick:this.prevProject},i.a.createElement("img",{src:"images/smallarrow.png",className:"arrow",alt:""}),"Prev")),i.a.createElement("div",{className:"col"}),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:[this.state.activeProject.width,this.state.activeColor,"progress-bar"].join(" "),role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}))),i.a.createElement("div",{className:"col"}),i.a.createElement("div",{className:"col-2 text-right"},i.a.createElement("button",{className:"navigation-button",onClick:this.nextProject},"Next",i.a.createElement("img",{src:"images/smallarrow.png",className:"arrow-right",alt:""})))))))))))}}]),t}(c.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"About Page Content")}}]),t}(c.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},"/"===this.props.location.pathname?i.a.createElement(w,null):i.a.createElement(E,null))}}]),t}(c.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("h1",null,"Error 404! Page not found... (ToT)")}}]),t}(c.Component),k=(a(24),a(29)),y=a(30);window.React=i.a,Object(n.render)(i.a.createElement(k.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(y.a,{exact:!0,path:"/",component:f}),i.a.createElement(y.a,{exact:!0,path:"/about",component:f}),i.a.createElement(y.a,{exact:!0,path:"/error",component:N}))),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.1ca0d1ab.chunk.js.map