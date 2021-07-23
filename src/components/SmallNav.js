import { BrowserRouter as Route, Link, Switch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faSpotify,
  faDeezer,
} from "@fortawesome/free-brands-svg-icons";

import Music from "./Music";
import About from "./About";
import Contact from "./Contact";

export default function SmallNav() {
  return (
    <div className="small-nav">
      <nav>
        <ul textDecoration='none'>
          <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/music" >Music</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">About</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/music">
          <Music />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <a
        href="https://www.youtube.com/user/charlesgosme"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icon youtube"
      >
        <FontAwesomeIcon icon={faYoutube} size="30px" />
      </a>
      <a
        href="https://www.instagram.com/charlesgosmemusic"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icon"
      >
         <FontAwesomeIcon icon={faInstagram} size="30px" />
        </a>
      <a
        href="https://fr-fr.facebook.com/charlesgosmemusic/"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icon"
      >
        <FontAwesomeIcon icon={faFacebook} size="30px" />
      </a>
      <a
        href="https://open.spotify.com/artist/5aiTWTPhtHum6ELrh5wTnN"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icon"
      >
        <FontAwesomeIcon icon={faSpotify} size="30px" />
      </a>
      <a
        href="https://www.deezer.com/fr/artist/1181175"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icon"
      >
        <FontAwesomeIcon icon={faDeezer} size="30px" />
      </a>
    </div>
    
  );
}
