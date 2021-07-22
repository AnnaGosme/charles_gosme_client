import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import AdminPage from "./AdminPage"

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
 


  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/tracks">
          <AdminPage title={title} setTitle={setTitle} duration={duration} setDuration={setDuration} year={year} setYear={setYear} original={original} setOriginal={setOriginal} artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} url={url} setUrl={setUrl} order={order} setOrder={setOrder} trackList={trackList} setTrackList={setTrackList}/>
        </Route>
        </div>
    </Router>
  );
}

export default App;
