const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if (err){
    //         return console.log('unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    // });

    db.collection('Users').insertOne({
        Name: 'Yogesh Barot',
        Age : 28,
        Location: '2/12 Bhavani housing society, visnagar.'
    },(err, result)=>{
        if(err){
            return console.log('unable to insert user', err);
        }
         console.log(JSON.stringify(result.ops,undefined, 3));

    });


    db.close();
});