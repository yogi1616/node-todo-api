const {MongoClient, ObjectID}  = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5c6bfe07186eaf7d5e676781')
//    },{
//    $set: {
//        completed: false
//         }
//     },
//    {
//     returnOriginal:false
//    }).then((result)=>
//    {
//         console.log(result);
//    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c6d0c905de1370f3c74124f')
     },
    {
        $set:{
            Name:'Jane Doe'
     }
    ,    
    $inc:{
        age: 2
    }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

 //   db.close();
});