import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import AdminPage from "./components/AdminPage";
import Music from "./components/Music";
import About from "./components/About";
import Contact from "./components/Contact";

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
  const [newTitle, setNewTitle] = useState([]);

  return (
    <Router>
      <div className="App">
                <Route exact path="/" component={Home} />
        <Route path="/music" render={() => <Music url={url} />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/tracks">
          <AdminPage
            title={title}
            setTitle={setTitle}
            duration={duration}
            setDuration={setDuration}
            year={year}
            setYear={setYear}
            original={original}
            setOriginal={setOriginal}
            artist={artist}
            setArtist={setArtist}
            album={album}
            setAlbum={setAlbum}
            url={url}
            setUrl={setUrl}
            order={order}
            setOrder={setOrder}
            trackList={trackList}
            setTrackList={setTrackList}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
