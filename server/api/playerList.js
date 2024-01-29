const Router = require('express').Router();

const Validation = require('../helpers/validationHelper');
const playerListHelper = require('../helpers/playerListHelper');
const addPlayerHelper = require('../helpers/addPlayerHelper');
const GeneralHelper = require('../helpers/generalHelper');
const deletePlayerHelper = require('../helpers/deletePlayerHelper');
const updatePlayerHelper = require('../helpers/updatePlayerHelper')

const playerList = async (request, reply) => {
    try {
        Validation.playerListValidation(request.query);
        const { playerName, id } = request.query;
        const response = await playerListHelper.getPlayerList({ playerName, id });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const addPlayer = async (request, reply) => {
    try {
        Validation.addPlayerValidation(request.body);
        const { addPlayer } = request.body;
        const response = await addPlayerHelper.addPlayer({ addPlayer });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const updatePlayer = async (request, reply) => {
    try {
        Validation.updatePlayerValidation(request.body);
        const { id } = request.query
        const { updatePlayer } = request.body;
        const response = await updatePlayerHelper.updatePlayer({ updatePlayer, id });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const deletePlayer = async (request, reply) => {
    try {
        Validation.deletePlayerValidation(request.query);
        const { id } = request.query;
        const response = await deletePlayerHelper.deletePlayer({ id });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

Router.get('/playerlist', playerList);
Router.post('/addplayer', addPlayer);
Router.patch('/updateplayer', updatePlayer)
Router.delete('/deleteplayer', deletePlayer);

module.exports = Router;