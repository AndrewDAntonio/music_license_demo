import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'


export const PlayedTrack = ({playedTrack}) => {

    console.log(playedTrack)
    
    return (
        <li>
            <span>Title: {playedTrack.title} </span>
            <span>Songwriter: {playedTrack.songwriter} </span>
            {playedTrack.payed ? (
                <span>Status: Payed</span>
            ) : (
                <>
                <span>License Fee: $1</span>
                <span><button className= 'buttonTrack'>Pay Now</button></span>
                </>
            )}
            
        </li>
    )
}

export default PlayedTrack;