import styled from 'styled-components'

const StyledHeading = styled.h1`
margin: 0px;
font-size: 30px;
font-weight: 500;
text-shadow: 1px 2px black;
padding-top: 30px;
text-align: center;
`
const StyledTitle = styled.h2`
margin-top: 20px;
font-size: 30px;
font-weight: 400;
`
const StyledImage = styled.img`
border-radius: 10px;
border: 1px solid black;
`

const StyledP = styled.p`
margin: 20px 0px;
line-height: 30px;
letter-spacing: 2px;
`
const StyledLink = styled.a`
text-decoration: none;
color: white;
padding: 2px 5px;
border-radius: 5px;
margin: 0px;
background-color: gray;
:hover{
  color: gray;
  background-color: lightgray;
}
`
const ProjectComponent = ({ projects, title }) => {
  return (
    <>
      <StyledHeading>{title}</StyledHeading>
      {projects.map(project => (
        <div key={project.id}>
          <StyledTitle>{project.title}</StyledTitle>
          <StyledP> {project.description} </StyledP>
          <StyledImage src={project.path} alt="" width="300px" />
          <br />
          <StyledLink href={project.link} target="_blank">GITHUB</StyledLink>
          <br />
        </div>
      ))}
    </>
  )
}

export default ProjectComponent