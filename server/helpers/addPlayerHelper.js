const _ = require('lodash');
const fs = require('fs')

const addPlayer = async (dataObject) => {
    const { addPlayer } = dataObject;
    try {
        let playerList = JSON.parse(fs.readFileSync('./assets/players.json'));
        if (addPlayer && addPlayer.playerName && addPlayer.playerNation && addPlayer.playerNumber) {
            const newPlayer = {
                id: Math.random().toString(36).slice(2),
                playerName: addPlayer.playerName,
                playerNation: addPlayer.playerNation,
                playerNumber: addPlayer.playerNumber
            }
            playerList.push(newPlayer)
            fs.writeFileSync('./assets/players.json', JSON.stringify(playerList))
            return Promise.resolve(playerList);
        } else {
            return Promise.resolve("Please fill all attributes");
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    addPlayer
}
