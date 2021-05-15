import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import PlayedTrack from '../components/PlayedTrack.js'



export const PlayedTrackContainer = ({playedSongs}) => {

    const [componentState, setComponentState] = useState(playedSongs)
    const renderTracks = playedSongs.map(playedTrack => {
        return <PlayedTrack
                    key={playedTrack.id}
                    playedTrack={playedTrack}
                />
    })

    return (
        <>
            <h2 className= "containerH2">Manage Licensing Fees</h2>
            <ul className= "playedTrack">
                {renderTracks}
            </ul>
        </>
    )
}


export default PlayedTrackContainer;