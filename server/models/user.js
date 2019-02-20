var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

// var newUser = new User({
//     email:'    yogeshbarot07@gmail.com   '
// });

// newUser.save().then((doc)=>{
//     console.log('saved User',doc)
// },(e)=>
// {
//     console.log('unable to save the user',e)
// });

module.exports = {User};