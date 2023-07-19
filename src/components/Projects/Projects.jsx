import React , {useState} from "react";
import "./Projects.css";

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';

function Projects() {

const getImageUrls = (id) =>{
  const projects = {
    1:[
      img1,img2,img3,img4,img5,img6,img7,img8
    ],
    2:[
      img2,img3,img5,img4
    ],
    3:
    [
      img1 , img7 , img6 , img8 , img3
    ]
  };
  return projects[id] || []
}
    
const buttons = ['All' , 'FrontEnd' , 'BackEnd']
    
  
const [selectedButton, setSelectedButton] = useState(1);

const [active , setActive] = useState(false);

const handleMouseOver = () =>{
  setActive(true);

};

const handleMouseOut = () =>{
  setActive(false);

};

const handleButtonClick = (buttonId) => {
  setSelectedButton(buttonId);
  console.log(selectedButton);
  
};


  return (
    <div className="project-container">
      <h1 className="project-header">Project</h1>
      <div className="button-list">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index+1)}
          className={selectedButton === index+1 ? 'active' : 'nav-button'}
          
        >
          {button}
        </button>
      ))}
       
      </div>
      <div className="project-list">
      {getImageUrls(selectedButton).map((imageUrl, index) => (
       
          <a href="#" style={{ flexBasis: '25%', marginBottom: '160px'}}
          
          >
            <img className= 'project-image' key={index} src={imageUrl} alt={buttons[index]} 
            style={{ position: 'absolute', width: '273px', height: '160px' }}
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut} 
            />
          </a> 
        ))}
        
        <div className={active ? "project-image overlay" : "project-image"}></div>
      </div>
    
  </div>
  );
  
  
}

export default Projects;
