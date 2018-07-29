const dynamo = require('dynamodb');
const Joi = require('joi');

const Todo = dynamo.define('Todo', {
  hashKey: 'id',
  timestamps: true,
  updatedAt: false,
  schema: {
    id: dynamo.types.uuid(),
    text: Joi.string().required(),
    completed: Joi.boolean(),
  }
});

module.exports = {Todo};
