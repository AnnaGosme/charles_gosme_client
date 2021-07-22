import Axios from "axios";
import ReactPlayer from "react-player";

export default function Music() {
  return (
    <div className="music-page">
      🎧 💻 🎹 🎶 🎵 🎶
      
        
        <iframe
        //   style={{"border0; width: 350px; height: 470px"}
          src="https://bandcamp.com/EmbeddedPlayer/album=322914941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://charlesgosme.bandcamp.com/album/edge-of-chaos-2">
            Edge of Chaos by Charles Gosme
          </a>
        </iframe>
      
    </div>
  );
}
