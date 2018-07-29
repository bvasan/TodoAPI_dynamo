const {dynamo} = require('./../server/db/dynamo.js');
const {Todo} = require('./../server/models/todo.js');

id = 'eb4cb3cb-cb77-4a3c-baf7-e2af7f6ea863'
var text1 = "Updated todo text";


Todo.update({id: id, text: text1}, {ReturnValues: "ALL_NEW"}, (err, res) => {
  if (err) {
    return console.log('Error updating', err);
  }
  if (!res) {
    return console.log('Can not find item to update');
  }
  console.log(res);
});
