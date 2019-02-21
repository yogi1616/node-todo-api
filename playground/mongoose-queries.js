const{ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = '5c6e46f05334651f2704c62d';

if(!ObjectID.isValid(id)){
    console.log('ID is not valid')
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
// console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
// console.log('Todo', todo)
// });

Todo.findById(id).then((todo)=>{
    if(!todo){
      return  console.log('Id not found');
    }
    console.log('Todo by id',todo)
}).catch((e)=>console.log(e));

// User.findById('5c6e65fd32aadd85db5532d6').then((users)=>{
//     if(!user){
//         return console.log('unable to find user');
//     }
//     console.log(JSON.stringify(users,undefined,2));
// },(e)=>{
//     console.log(e)
// });
