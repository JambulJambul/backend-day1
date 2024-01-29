const _ = require('lodash');
const fs = require('fs')

const updatePlayer = async (dataObject) => {
    const { updatePlayer, id } = dataObject;
    try {
        let playerList = JSON.parse(fs.readFileSync('./assets/players.json'));
        if (updatePlayer) {
            playerList.map((item) => {
                if (item.id == id) {
                    item.id = id;
                    item.playerName = updatePlayer.playerName || item.playerName;
                    item.playerNation = updatePlayer.playerNation || item.playerNation;
                    item.playerNumber = updatePlayer.playerNumber || item.playerNumber;
                }
            })
            fs.writeFileSync('./assets/players.json', JSON.stringify(playerList))
            return Promise.resolve(playerList);
        } else {
            console.log("No player data");
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    updatePlayer
}
