import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const Nav = styled.div`
margin: 0;
padding: 0;
position: fixed;
width: 100vw;

`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
padding: 20px;
background-color: black;
:hover{
  color: lightsteelblue;
}
`
const StyledUL = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
background-color: black;
padding: 20px;
margin: 0;

`

const Navigation = () => {
  return (
    <Nav>
      <StyledUL>
        <li>
          <StyledLink to="/">Om Mig</StyledLink>
        </li>
        <li>
          <StyledLink to="/projects">Projekt</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">kontakt</StyledLink>
        </li>
        <li>
          <StyledLink to="/weather"><FontAwesomeIcon icon={faCloudSun} color="white" /></StyledLink>
        </li>
      </StyledUL>
    </Nav>
  )
}

export default Navigation