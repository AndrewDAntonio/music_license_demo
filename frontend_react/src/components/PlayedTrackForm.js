import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'





export const PlayedTrackForm = ({currentUser, handleUpdatePlayedSongs, fetchVenue}) => {
    
    const initialState = {
      trackName: "",
      artistName: "",
      songwriterName: "",
      venueName: currentUser.name
  }
    const [formValues, setFormValues] = useState(initialState)
    
    const history = useHistory()
    
  
    const handleInputChange = event => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
      }

    const handleSubmit = event => {
      event.preventDefault()
  
      fetch("http://localhost:3000/played_tracks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(formValues)
      })
        .then(r => r.json())
        .then(playedTrack => { 
          setFormValues(initialState)
          fetchVenue(currentUser.id)
          handleUpdatePlayedSongs(currentUser.songs)
          
          
        })
    }
        
        const {trackName, artistName, songwriterName} = formValues
        
        return (
            <div className="form-container">
                <h4>Enter Song Info Below</h4>
                <form onSubmit={handleSubmit}>
                    <div> 
                        <label>Artist:</label>
                        <input type="text" name="artistName" onChange={handleInputChange} value={artistName} />
                    </div>
                    <div>
                        <label>Songwriter: </label>
                        <input type="text" name="songwriterName" onChange={handleInputChange} value={songwriterName} />
                    </div>
                    <div>
                        <label>Song Name: </label>
                        <input type="text" name="trackName" onChange={handleInputChange} value={trackName} rows="10" cols="40"/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
             </div>
        )
    }



export default PlayedTrackForm;