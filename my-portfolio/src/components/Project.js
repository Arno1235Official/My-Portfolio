import { useState } from 'react';

const Project = ({projectName, projectDescription}) => {

  const [projectIsOpen, setProjectIsOpen] = useState(false);

  return (
    <div className="project_container" onClick={() => {setProjectIsOpen(!projectIsOpen);}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"></link>

        <div className="project_header">
            <h1 className="project_name">{projectName}</h1>
            <span class="material-icons-outlined">
                {projectIsOpen ? "expand_less" : "expand_more"}
            </span>
        </div>

        {projectIsOpen && <h2>{projectDescription}</h2>}
        
    </div>
  )
}

export default Project
