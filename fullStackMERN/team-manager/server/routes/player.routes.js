const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.post('/api/players', PlayerController.createPlayer);
    
    
    // changes all values in the datbase to match the request body
    // app.put('/api/players/:id', PlayerController.updatePlayer);
    
    // changes only the values in the req body 
    app.patch('/api/players/:id', PlayerController.updatePlayer);
    
    // delete player 
    app.delete('/api/players/:id', PlayerController.deletePlayer);

    //double check spelling of routes when 404 error occurs in postman
}


