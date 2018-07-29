const {dynamo} = require('./../server/db/dynamo.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// dynamo.AWS.config.update({region: 'us-east-1', endpoint: 'http://localhost:8000'});

dynamo.createTables(function(err) {
  if (err) {
    console.log('Error creating tables: ', err);
  } else {
    console.log('Tables has been created');
  }
});

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
