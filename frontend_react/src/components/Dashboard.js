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
    

    
    
    const totalOwed = playedSongs.length && playedSongs.map(song => {
            if(!song.payed) { 
                return song.license_cost
            } else {
                return 0
            }
    }).reduce((total, amount) => { return total += amount})



    
    const totalPaid = playedSongs.length && playedSongs.map(song => {
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

    function handleUpdatePayment(id) {
        

        fetch(`http://localhost:3000/played_tracks/`+ id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" 
            },
            credentials: "include",
            body: JSON.stringify(id)
        })
        .then(r => r.json())
        .then((updatedTrack) => {
            fetchVenue(currentUser.id)
            handleUpdatePlayedSongs(currentUser.songs)
            
            
        })
    }
    
    
    return (
        <>
            
            <PlayedTrackContainer  handleUpdatePayment={handleUpdatePayment} playedSongs={playedSongs}/>
            <span className= "dashboardSpan">Total Licenses Outstanding: ${totalOwed}</span>
            <span className= "dashboardSpan"> Total Licenses Paid: ${totalPaid}</span>
            <span className= "dashboardSpan"> Grand Total: ${grandTotal} </span>
            <PlayedTrackForm currentUser={currentUser} fetchVenue={fetchVenue} handleUpdateCurrentUser={handleUpdateCurrentUser} handleUpdatePlayedSongs={handleUpdatePlayedSongs} />

        </>
    )

}


export default Dashboard;