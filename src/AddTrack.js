import { useState } from "react";
import Axios from "axios";

export default function AddTrack({ title, setTitle, duration, setDuration, year, setYear,original, setOriginal, artist, setArtist, album, setAlbum, url, setUrl, order, setOrder, trackList, setTrackList}) {

    const addTrack = () => {
        Axios.post("http://localhost:5000/tracks", {
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

    return (
        <div className="add-track">
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
        </div>
        </div>
    )
}
