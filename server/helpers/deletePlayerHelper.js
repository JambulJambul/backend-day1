const _ = require('lodash');
const fs = require('fs')

const deletePlayer = async (dataObject) => {
    const { id } = dataObject;
    try {
        let playerList = JSON.parse(fs.readFileSync('./assets/players.json'));
        const newPlayerList = playerList.filter(child => child.id != id);
        fs.writeFileSync('./assets/players.json', JSON.stringify(newPlayerList))
        return Promise.resolve(newPlayerList);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    deletePlayer
}
