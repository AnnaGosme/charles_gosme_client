import { Link } from "react-router-dom";
import SmallNav from "./SmallNav"
import cello from "../assets/cello.png";

export default function Music() {
  return (
    <div className="music-page">
      <div className="music-page-top-container">
      <Link to="/">
            <img className="logo" src={cello} alt="return to home page" />
            </Link>
      <div className="music-page-title">
     {/* <SmallNav /> */}
            <h1 className="charles-gosme-title charles-gosme-title-music-page">Charles Gosme</h1>
            
            </div>
            </div>
        <h3 className="music-page-text">Listen to my music on Spotify and buy it on iTunes by clicking on the iTunes and Spotify icons just below. You can also listen to my music directly on this page, by streaming the bandcamp tracks further below.</h3>
      
      {/* <iframe title="Edge of Chaos"
        className="bandcamp-player"
        src="https://bandcamp.com/EmbeddedPlayer/album=322914941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://charlesgosme.bandcamp.com/album/edge-of-chaos-2">
          Edge of Chaos by Charles Gosme
        </a>
      </iframe> */}
    </div>
  );
}
