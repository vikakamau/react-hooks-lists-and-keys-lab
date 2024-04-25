import React from "react";

function ProjectItem({ name, about, technologies }) {
   const list= technologies.map((techno)=>{
   return(
    <span key={techno}>{techno}</span>
   )
   })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
      </div>
      {list}
    </div>
  );
}

export default ProjectItem;
