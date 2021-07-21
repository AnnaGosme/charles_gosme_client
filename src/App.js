import { useState } from "react";
import Axios from "axios";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import ShowAllTracks from "./ShowAllTracks";
import AddTrack from "./AddTrack";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [year, setYear] = useState(2021);
  const [original, setOriginal] = useState(false);
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [url, setUrl] = useState("");
  const [order, setOrder] = useState("");

  const [trackList, setTrackList] = useState([]);
  const [newTitle, setNewTitle] = useState(2021);

 

  

  
 
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        
        <Route path="/tracks">
        <ShowAllTracks title={title} setTitle={setTitle} duration={duration} setDuration={setDuration} year={year} setYear={setYear} original={original} setOriginal={setOriginal} artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} url={url} setUrl={setUrl} order={order} setOrder={setOrder} trackList={trackList} setTrackList={setTrackList}/>
        </Route>
        <Route path="/tracks">
        <AddTrack title={title} setTitle={setTitle} duration={duration} setDuration={setDuration} year={year} setYear={setYear} original={original} setOriginal={setOriginal} artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} url={url} setUrl={setUrl} order={order} setOrder={setOrder} trackList={trackList} setTrackList={setTrackList}/>
        </Route>
        
        </div>
    </Router>
  );
}

export default App;
