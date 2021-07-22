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

      <a href="https://www.youtube.com/user/charlesgosme"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <h4>instagram</h4>
      <h4>spotify</h4>
      <h4>deezer</h4>
    </div>
  );
}
