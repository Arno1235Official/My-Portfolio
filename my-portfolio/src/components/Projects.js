import Project from './Project'

const Projects = () => {
  return (
    <div id="projects" className="projects_container">
        <h1 className="my_projects">My Projects</h1>
        <Project projectName="test1" projectDescription="test 1 description" />
        <Project projectName="test2" projectDescription="test 2 description" />
        <Project projectName="test3" projectDescription="test 3 description" />
    </div>
  )
}

export default Projects
