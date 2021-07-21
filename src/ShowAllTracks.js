import { useState } from "react";
import Axios from "axios";

import UpdateTrack from './UpdateTrack';
import DeleteTrack from './DeleteTrack';

export default function ShowAllTracks({ title, setTitle, duration, setDuration, year, setYear,original, setOriginal, artist, setArtist, album, setAlbum, url, setUrl, order, setOrder, trackList, setTrackList, newTitle, setNewTitle  }) {


    const getTracks = () => {
        Axios.get("http://localhost:5000/tracks").then((response) => {
          setTrackList(response.data);
        });
      };

  return (
    <div className="all-tracks">
      <button onClick={getTracks}>Show all tracks</button>
      {trackList.map((value, key) => {
        return (
          <div className="track">
            <div className="track-card-info">
              {`key=${value.track_id}`}
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
              <UpdateTrack title={title} setTitle={setTitle} duration={duration} setDuration={setDuration} year={year} setYear={setYear} original={original} setOriginal={setOriginal} artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} url={url} setUrl={setUrl} order={order} setOrder={setOrder} trackList={trackList} setTrackList={setTrackList} newTitle={newTitle} setNewTitle={setNewTitle} />
                <DeleteTrack trackList={trackList} setTrackList={setTrackList}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
