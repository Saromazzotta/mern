import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OnePlayer = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [onePlayer, setonePlayer] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setonePlayer(res.data.player))
            .catch(err => console.log(err))
    }, [])

    // Delete Player
    const deletePlayer = (e) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => setonePlayer(res))
            .catch(err => console.log(err))
        navigate("/api/players")
    }

    const navigateToEditPlayer = (e) => {
        navigate(`/api/players/${id}/edit`)
    }

    return (
        <div>
            <h1>Name: {onePlayer.name}</h1>
            <p>Preferred Position: {onePlayer.preferredPosition}</p>
            <p>Game One Status: {onePlayer.gameOneStatus}</p>
            <p>Game Two Status: {onePlayer.gameTwoStatus}</p>
            <p>Game Three Status: {onePlayer.gameThreeStatus}</p>

            <button className="btn btn-info" onClick={(e) => navigateToEditPlayer(onePlayer._id)}>Edit Player</button>
            <button className="btn btn-danger" onClick={deletePlayer}>Delete Player</button>

        </div>
    )
}

export default OnePlayer