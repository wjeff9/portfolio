import React from 'react';
import './App.css';
import { Route, Link, Switch, Redirect, HashRouter } from 'react-router-dom';
import About from './About.js'
import Work from './Work.js'
import ScrollToTop from './ScrollToTop.js'
import ProjMyWebsite from './ProjMyWebsite'
import ProjSecurate from './ProjSecurate'
import ProjFoodie from './ProjFoodie'

function App() {
  // TODO: Fix link iteraction (active link should be white)
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <nav>
            <Link to="/about" id="logo">Jeffrey Wang</Link>
            <div className="nav-row">
              <Link to="/about" className="nav-col">About</Link>
              <Link to="/work" className="nav-col">Work</Link>
            </div>
          </nav>
          <Switch>
            <Redirect exact path="/" to="/about" />
            <Route path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route path="/work/foodie" component={ProjFoodie} />
            <Route path="/work/securate" component={ProjSecurate} />
            <Route path="/work/this+website" component={ProjMyWebsite} />
          </Switch>
        </ScrollToTop>
      </HashRouter>
      <footer>
        <p id="contact">Contact</p>
        <br />
        <a className="contact-info" href="https://www.linkedin.com/in/jeffrey-wang-327b0915b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <a className="contact-info" href="mailto:jeffwhy99@gmail.com">Mail</a>
      </footer>
    </div>
  )
}

export default App;
