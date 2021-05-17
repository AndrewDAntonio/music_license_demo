import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'


export const PlayedTrack = ({playedTrack, handleUpdatePayment}) => {

    const {id, title, songwriter, license_cost, payed} = playedTrack
    console.log(id)
    return (
        <tr>
            <td>{title} </td> 
            <td>{songwriter} </td>
            <td>${license_cost}</td>
            {payed ? (
                <td>Paid</td>
            ) : (
                <td><button className= 'buttonTrack' onClick={() => handleUpdatePayment(id)}>Pay Now</button></td>
            )}
            
        </tr>
    )
}

export default PlayedTrack;