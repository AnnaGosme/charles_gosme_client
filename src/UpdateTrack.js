import { useState } from "react";
import Axios from "axios";

export default function UpdateTrack({ title, setTitle, duration, setDuration, year, setYear,original, setOriginal, artist, setArtist, album, setAlbum, url, setUrl, order, setOrder, trackList, setTrackList, newTitle, setNewTitle }) {
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
    
    return (
            <div className="modify-track-info">
                    
                    <input
                      type="text"
                      placeholder="New track title here"
                      onChange={(e) => {
                        setNewTitle(e.target.value);
                      }}
                    />
                    
                    <button
                    // onClick={() => {
                    //   updateTrackTitle(value.track_title);
                    //  }}
                    >
                      Update track title
                    </button>
        </div>
    )
}
