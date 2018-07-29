const {dynamo} = require('./../server/db/dynamo.js');
const {Todo} = require('./../server/models/todo.js');

var id = 'eb4cb3cb-cb77-4a3c-baf7-e2af7f6ea863';

Todo.destroy({id: id}, {ReturnValues: "ALL_OLD"}, (err, res) => {
  if (err) {
    return console.log('Error deleting', err);
  }
  if (!res) {
    return console.log('Nothing to delete');
  }
  console.log(res);
});
