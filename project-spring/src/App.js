import './App.css';
import Home from './Componnent/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InsideOfBrain from './Componnent/InsideOfBrain/InsideOfBrain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div>
      <header id="Header">
        <p>Imtious-Coder</p>
      </header>

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/insideOfBrain">
            <InsideOfBrain />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* Footer */}
      <footer className="bg-dark">
                <div className="container pt-5">
                    <div className="row">
                        {/* Socila links */}
                        <div className="col-md-4">
                            <p id="Social">Say Hello</p>
                        <a href="https://www.facebook.com/profile.php?id=100030607042215" ><FontAwesomeIcon id="Social-Icon1" icon={faFacebook} /></a>
                        <a href="https://github.com/Imtious-coder" ><FontAwesomeIcon id="Social-Icon2" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/imtious-islam-842a73189/" ><FontAwesomeIcon id="Social-Icon3" icon={faLinkedin} /></a>
                        </div>
                        <div className="col-md-4"></div>
                        {/* Copyright */}
                        <div className="col-md-4 d-flex align-items-center text-white">
                            <p>© All rights reserved by "Spring"</p>
                        </div>
                    </div>
                </div>
            </footer>
    </div>

  );
}

export default App;
