const dynamo = require('dynamodb');
const Joi = require('joi');

const Todo = dynamo.define('Todo', {
  hashKey: 'id',
  schema: {
    id: dynamo.types.uuid(),
    text: Joi.string().required(),
    completed: Joi.boolean().default(false),
    completedAt: Joi.date().timestamp('javascript')
  }
});

module.exports = {Todo};
