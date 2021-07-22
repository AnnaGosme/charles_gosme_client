import React from 'react'

export default function Music({ url }) {
    return (
        <div className="music-page">
            🎧 💻 🎹 🎶 🎵 🎶
            <ReactPlayer
                        width="200"
                        height="185"
                        url={`${value.track_youtube_url}`}
                      />
        </div>
    )
}
