var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
        text:{
            type:String,
            required: true,
            minlength:1,
            trim:true
        },
        Completed:{
            type:Boolean,
            default:false
        },
        CompletedAt:{
            type:Number,
            default:null
        }
    });
    
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
    module.exports = {Todo};