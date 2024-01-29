const _ = require('lodash');
const fs = require('fs')

const getPlayerList = async (dataObject) => {
    const { playerName, id } = dataObject;
    try {
        let playerList = JSON.parse(fs.readFileSync('./assets/players.json'));
        if (!_.isEmpty(playerName)) {
            playerList = _.filter(playerList, (item) => item.playerName.toLowerCase() === playerName.toLowerCase());
        }
        if (!_.isEmpty(id)) {
            playerList = _.filter(playerList, (item) => item.id === id);
        }
        return Promise.resolve(playerList);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPlayerList
}
