import styled from 'styled-components'

const AboutBody = styled.div`
width: 100vw;
height: 100vh;
background-color: gray;
overflow: auto;

`

const AboutDiv = styled.div`
width: 80vw;
max-width: 600px;
padding-top: 70px;
padding-bottom: 40px;
margin: 0 auto;
`
const StyledHeadingOne = styled.h1`
font-size: 30px;
text-align: center;
color: white;
text-shadow: 1px 2px black;
padding: 10px;
`
const StyledParagraph = styled.p`
color: white;
line-height: 30px;
letter-spacing: 2px;
`

const StyledImage = styled.img`
width: 100px;
border-radius: 20%;
margin: 10px;
float: left;
`

const About = () => {
  return (
    <AboutBody>
      <AboutDiv>
        <StyledHeadingOne>Om Mig</StyledHeadingOne>
        <StyledImage src="http://cv.joelbeats.com/images/image1.jpg" alt="Bild på mig" />
        <StyledParagraph>Jag heter Joel Hjelmstedt och gör den här sidan som ett projekt i utbildningen Frontend developer på Kungliga Yrkeshögskolan. Jag är född och uppvuxen på Södermalm i Stockholm och har sedan barnsben varit intresserad av teknik och datorer. I mitten av 90-talet började jag göra elektronisk musik på familjens hemdator som jag satt framför nästan varje dag hela tonåren. Inte förrän 2014 jag fick jag upp ögonen för programmering efter att ha hittat några av de första "tutorials" inom Java på youtube. Jag sökte in till en yrkeshögskola och fördjupade mina kunskaper i Java under 2 år. Trots utbildningen fortsatte jag i min gamla bransch då jag inte fick de jobb jag ville ha. När Corona drabbade Sverige i mitten av Mars 2020 misstänkte jag att pandemin skulle drabba den branschen hårt. Jag sökte då in till ytterligare en Yrkeshögskola med inriktning Frontend som jag kände mer stämde överens med mitt intresse och här är jag nu. </StyledParagraph>
      </AboutDiv>
    </AboutBody>
  )
}

export default About