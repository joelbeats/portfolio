import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ProjectComponent from './ProjectComponent'

const ProjectsBody = styled.div`
width: 100vw;
margin: 0px auto;
background-color: gray;
color: white;
`

const ProjectsDiv = styled.div`
width: 80vw;
max-width: 600px;
margin: 0px auto;
padding-top: 70px;
padding-bottom: 40px;
`
const Projects = () => {

  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetch('/projects-data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
      })
  }, [])

  return (
    <ProjectsBody>
      <ProjectsDiv>
        {projects && <ProjectComponent projects={projects} title="Mina projekt" />}
      </ProjectsDiv>
    </ProjectsBody>
  )
}

export default Projects