import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const PlayerDashboard = () => {
    const [players, setPlayers] = useState([]);//can only map through when state is an empty array
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data.players))
            .catch(err => console.log(err))
    }, []) //need dependecy array so it does not infiinte loop and you want it empty if you are using setter

    //navigate to player form
    const navigateToPlayerForm = () => {
        navigate("/api/players/create")
    }

    const deletePlayer = (id) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                const filteredPlayers = players.filter(player => player._id !== id)
                setPlayers(filteredPlayers)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1 classNmae="mx=auto">Player Dashboard</h1>
            <table className="col-md-6 mx-auto mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => {
                        return (
                            <tr key={player._id}>
                                <td><Link to={`${player._id}`}>{player.name}</Link></td>
                                <td>{player.preferredPosition}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={(e) => deletePlayer(player._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-info offset-4 mt-3" onClick={navigateToPlayerForm}>Create Player</button>
        </div>
    )
}

export default PlayerDashboard