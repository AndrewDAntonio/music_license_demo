import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import PlayedTrackForm from '../components/PlayedTrackForm.js'
import PlayedTrackContainer from '../components/PlayedTrackContainer.js'


export const Dashboard = ({currentUser, handleUpdateCurrentUser, fetchVenue}) => {

    useEffect(() => {
        setPlayedSongs(currentUser.songs)
    }, [currentUser])
    
    const playedSongArray = currentUser.songs
    
    
    const [playedSongs, setPlayedSongs] = useState([playedSongArray])
    

    
    
    const totalOwed = playedSongs.map(song => {
            if(!song.payed) { 
                return 1 
            } else {
                return 0
            }
    }).reduce((total, amount) => { return total += amount})

    
    const totalPaid = playedSongs.map(song => {
        if(song.payed) { 
            return song.license_cost 
        } else {
            return 0
        }
    }).reduce((total, amount) => { return total += amount})

    const grandTotal = totalPaid + totalOwed
    

    function handleUpdatePlayedSongs(tracks) {
        setPlayedSongs(tracks) 
    }
    
    
    return (
        <>
            
            <PlayedTrackContainer  playedSongs={playedSongs}/>
            <div></div>
            <span className= "dashboardSpan">Total Licenses Outstanding: ${totalOwed}</span>
            <span className= "dashboardSpan"> Total Licenses Paid: ${totalPaid}</span>
            <span className= "dashboardSpan"> Grand Total: ${grandTotal} </span>
            <div></div>
            <PlayedTrackForm currentUser={currentUser} fetchVenue={fetchVenue} handleUpdateCurrentUser={handleUpdateCurrentUser} handleUpdatePlayedSongs={handleUpdatePlayedSongs} />

        </>
    )

}


export default Dashboard;