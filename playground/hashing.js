const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt)=>{
//         bcrypt.hash(password, salt,(err, hash)=>{
//                 console.log(hash);
//         });
// });

var hashpassword = '$2a$10$ClDY8qM9BL/43XKfsNRY3ODwnJLHbGiZw0sOfhlfzUK8E4P4mszim';
bcrypt.compare(password, hashpassword,(err,res)=>
{
console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, 'abc123');
// console.log(token);

// var decoded = jwt.verify(token, 'abc123');
// console.log('decoded', decoded);
// var message = 'I am user number 1';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`HASH: ${hash}`);

// var data ={
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed. do not trust.')
// }