import { useState } from "react";
import Axios from "axios";
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

  const addTrack = () => {
    Axios.post("http://localhost:5000/create", {
      title: title,
      duration: duration,
      year: year,
      original: original,
      artist: artist,
      album: album,
      url: url,
      order: order,
    }).then(() => {
      console.log("success posting");
    });
  };

  const getTracks = () => {
    Axios.get("http://localhost:5000/tracks").then((response) => {
      setTrackList(response.data);
    });
  };

  // const getTracksByYear = () => {
  //   Axios.get("http://localhost:5000/tracks:year").then((response) => {
  //     setSearchYear(response.data);
  //     console.log(response.data);
  //   });
  // };

  const updateTrackTitle = (id) => {
    Axios.put(`http://localhost:5000/tracks/${id}`, {
      track_title: newTitle,
      track_id: id,
    }).then((response) => {
      console.log("updated");
      setNewTitle(
        trackList.map((value) => {
          return value.track_id == id
            ? {
                id: value.track_id,
                title: newTitle,
                duration: value.track_duration,
                year: value.track_release_year,
              }
            : value;
        })
      );
    });
  };

  const deleteTrack = (id) => {
    Axios.delete(`http://localhost:5000/tracks/${id}`).then((response) => {
      setTrackList(
        trackList.filter((val) => {
          return val.track_id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="input-form">
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Duration</label>
        <input
          type="number"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <label>Release year</label>
        <input
          type="number"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <label>Cover track</label>
        <input
          className="checkbox"
          type="checkbox"
          onChange={(e) => {
            setOriginal(e.target.value);
          }}
        />
        <label>Original artist</label>
        <input
          type="text"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <label>Album</label>
        <input
          type="text"
          onChange={(e) => {
            setAlbum(e.target.value);
          }}
        />
        <label>Order in album</label>
        <input
          type="number"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        />
        <label>Youtube link</label>
        <input
          type="text"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button onClick={addTrack}>Add track</button>
        <div className="all-tracks">
          <button onClick={getTracks}>Show all tracks</button>
          {trackList.map((value, key) => {
            return (
              <div className="track">
                <div className="track-card-info">
                  <h3>{`Title:${value.track_title}`}</h3>
                  <h3>{`Duration:${value.track_duration}`}</h3>
                  <h3>{`Youtube URL:${value.track_youtube_url}`}</h3>
                  <h3>{`Release year:${value.track_release_year}`}</h3>
                  <h3>{`Album:${value.track_album}`}</h3>
                  <h3>{`Album order:${value.track_order}`}</h3>
                  <h3>
                    {value.original_track === 0
                      ? `Originally by: ${value.original_artist}`
                      : "Original by Charles Gosme"}
                  </h3>
                </div>
                <div className="modify-track-info">
                  <input
                    type="text"
                    placeholder="New track title here"
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateTrackTitle(value.track_id);
                    }}
                  >
                    Update track title
                  </button>
                </div>
                <div className="delete-track">
                  <button
                    onClick={() => {
                      deleteTrack(value.track_id);
                    }}
                  >
                    Delete track
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
