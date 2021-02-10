import { createGlobalStyle } from 'styled-components';

import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './pages/Contact';
import Projects from './pages/projects/Projects';
import About from './pages/About';
import Weather from './pages/Weather';

const AppStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 300;
    
}
`

function App() {
  return (
    <>
      <AppStyle />
      <Router>
        <Navigation />
        <Switch>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/">
            <About />
          </Route>

        </Switch>
      </Router>
    </>

  );
}

export default App;