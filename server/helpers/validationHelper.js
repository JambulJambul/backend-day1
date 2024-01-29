const Joi = require('joi');
const Boom = require('boom');

const playerListValidation = (data) => {
  const schema = Joi.object({
    playerName: Joi.string().optional().description('player name; i.e. Bambang Pamungkas'),
    id: Joi.string().optional().description('player ID')
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const addPlayerValidation = (data) => {
  const schema = Joi.object({
    addPlayer: Joi.object().optional().description('Object of new player information'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const updatePlayerValidation = (data) => {
  const schema = Joi.object({
    updatePlayer: Joi.object().optional().description('Object of new player information'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const deletePlayerValidation = (data) => {
  const schema = Joi.object({
    id: Joi.string().optional().description('player ID')
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  playerListValidation, addPlayerValidation, deletePlayerValidation, updatePlayerValidation
};
