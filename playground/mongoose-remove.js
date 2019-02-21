const{ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//findOneAndRemove

Todo.findByIdAndRemove('5c6ea9e7402d1c50d461739d').then((result)=>{
    console.log(result);
});