const ddb = require('dynamodb');
const Joi = require('joi');

ddb.AWS.config.update({region: 'us-east-1', endpoint: 'http://localhost:8000'});

var Todo = ddb.define('Todo', {
  hashKey: 'id',
  timestamps: true,
  updatedAt: false,
  schema: {
    id: ddb.types.uuid(),
    text: Joi.string().required(),
    completed: Joi.boolean(),
  }
});

var User = ddb.define('User', {
  hashKey: 'id',
  schema: {
    id: ddb.types.uuid(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().required(),
    tokens: [{access: Joi.string().required(), token: Joi.string().required()}]
  }
});
//
// ddb.createTables(function(err) {
//   if (err) {
//     console.log('Error creating tables: ', err);
//   } else {
//     console.log('Tables has been created');
//   }
// });

var todo = new Todo({text: 'this is a test 2'});
todo.save((err) => {
  if (err) {
    return console.error('Error creating todo in dynamo', err);
  };
  console.log('Created todo in dynamo ', todo);
});

var user = new User({email: 'lavan@example.com', password: 'abc123'});
user.save((err) => {
  if (err) {
    return console.error('Error create user in dynamo', err);
  };
  console.log('Created user in dynamo', user);
});
