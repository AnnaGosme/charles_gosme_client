import Axios from "axios";

export default function DeleteTrack({ trackList, setTrackList, value }) {
    const deleteTrack = (id) => {
        Axios.delete(`http://localhost:5000/tracks/${id}`).then((response) => {
          setTrackList(
            trackList.filter((value) => {
              return value.track_id !== id;
            })
          );
        });
      };
    
    return (
        <div>
                  <div className="delete-track">
                    <button className="btn btn-delete-track"
                        onClick={() => {
                         deleteTrack
                    (value.track_id);
                        }}
                    >
                      Delete track
                    </button>

                  </div>
        </div>
    )
}
