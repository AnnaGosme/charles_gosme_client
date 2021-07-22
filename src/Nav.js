import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram, 
    faSpotify,
    faDeezer
  } from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  return (
    <div className="nav">
      <h3>MUSIC</h3>
      <h3>ABOUT</h3>
      <h3>CONTACT</h3>

      <a href="https://www.youtube.com/user/charlesgosme" rel="noopener noreferrer" target="_blank"
        className="social-icon youtube">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.instagram.com/charlesgosmemusic" rel="noopener noreferrer" target="_blank"
        className="social-icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://open.spotify.com/artist/5aiTWTPhtHum6ELrh5wTnN" rel="noopener noreferrer" target="_blank"
        className="social-icon">
        <FontAwesomeIcon icon={faSpotify} size="2x" />
      </a>
      <a href="https://www.deezer.com/fr/artist/1181175" rel="noopener noreferrer" target="_blank"
        className="social-icon">
        <FontAwesomeIcon icon={faDeezer} size="2x" />
      </a>
      </div>
  );
}
