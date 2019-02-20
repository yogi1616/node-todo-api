var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required: true,
//         minlength:1,
//         trim:true
//     },
//     Completed:{
//         type:Boolean,
//         default:false
//     },
//     CompletedAt:{
//         type:Number,
//         default:null
//     }
// });

// var newTodo =new Todo({
//     text: 'lets go out side',
//     Completed: true,
//     CompletedAt:12
// });

// newTodo.save().then((doc)=>{
//     console.log('save Todo', doc);
// },(e)=>{
//     console.log('unable to save Todo',e);
// });

var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

var newUser = new User({
    email:'    yogeshbarot07@gmail.com   '
});

newUser.save().then((doc)=>{
    console.log('saved User',doc)
},(e)=>
{
    console.log('unable to save the user',e)
})