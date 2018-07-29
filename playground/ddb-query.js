const {dynamo} = require('./../server/db/dynamo.js');
const {Todo} = require('./../server/models/todo.js');

var id = 'eb4cb3cb-cb77-4a3c-baf7-e2af7f6ea863';

Todo.get({
  id: id
}, (err,todo) => {
  if (err) {
    return console.log('Error getting todo from DB ', err);
  }
  //
  // var t = todo.attrs;
  if (!todo) {
    return console.log('ID is not found');
  }
  console.log('Got Todo from DB ** ', todo.get('text'));
});
