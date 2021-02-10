import styled from 'styled-components'

const ContactBody = styled.div`
width: 100vw;
height: 100vh;
margin: 0px auto;
background-color: gray;
color: white;
`
const ContactsDiv = styled.div`
width: 40vw;
margin: 0px auto;
padding-top: 80px;
text-align: center;
`

const StyledLink = styled.a`
text-decoration: none;
color: white;
font-size: 30px;
padding: 10px;
border-radius: 5px;
margin: 0px;
background-color: gray;
:hover{
  color: gray;
  background-color: lightgray;
}
`

const Contact = () => {
  return (
    <ContactBody>
      <ContactsDiv>
        <StyledLink href="https://github.com/joelbeats" target="_blank">JOELS GITHUB</StyledLink>
      </ContactsDiv>
    </ContactBody>
  )
}

export default Contact