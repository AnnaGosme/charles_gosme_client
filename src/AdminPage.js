import { Link } from "react-router-dom";

import ShowAllTracks from "./ShowAllTracks";
import AddTrack from "./AddTrack";

import cello from "./assets/cello.png";

export default function AdminPage({ title, setTitle, duration, setDuration, year, setYear,original, setOriginal, artist, setArtist, album, setAlbum, url, setUrl, order, setOrder, trackList, setTrackList, newTitle, setNewTitle }) {
    return (
        <div className="admin-page">
        <div className="admin-top">
            <Link to="/">
            <img className="logo" src={cello} alt="return to home page" />
            </Link>
            <h2 className="admin-title">Administrator Dashboard</h2>
            </div>
        <div className="admin-container">
        <div>
            <AddTrack title={title} setTitle={setTitle} duration={duration} setDuration={setDuration} year={year} setYear={setYear} original={original} setOriginal={setOriginal} artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} url={url} setUrl={setUrl} order={order} setOrder={setOrder} trackList={trackList} setTrackList={setTrackList}/>
        
        </div>
        <div>
            <ShowAllTracks title={title} setTitle={setTitle} duration={duration} setDuration={setDuration} year={year} setYear={setYear} original={original} setOriginal={setOriginal} artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} url={url} setUrl={setUrl} order={order} setOrder={setOrder} trackList={trackList} setTrackList={setTrackList}/>
            </div>
        </div>
        </div>
       
    )
}
