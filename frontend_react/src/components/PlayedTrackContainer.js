import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import PlayedTrack from '../components/PlayedTrack.js'



export const PlayedTrackContainer = ({playedSongs, handleUpdatePayment}) => {

    const [componentState, setComponentState] = useState(playedSongs)
    
    const renderTracks = playedSongs.map(playedTrack => {
        return <PlayedTrack
                    key={playedTrack.id}
                    playedTrack={playedTrack}
                    handleUpdatePayment={handleUpdatePayment}
                />
    })

    const renderHeader = () => {
        let headerElement = ['song name', 'songwriter', 'license fee', 'payment status']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    return (
        <>
            <h2 id='title'>Manage Licensing Fees</h2>
            <table id='tracks'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderTracks}
                </tbody>
            </table>
        </>
    )
}


export default PlayedTrackContainer;