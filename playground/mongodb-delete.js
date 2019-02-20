const {MongoClient, ObjectID}  = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text : ' eat lunch'}).then((result)=>{
    //     console.log(result);

    // });
    //deleteOne

    // db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete

        // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        //         console.log(result);
        // });

        // db.collection('Users').deleteMany({Name:'Yogesh Barot'}).then((result)=>{
        //     console.log(result);
        // });

        db.collection('Users').findOneAndDelete({
            _id : new ObjectID('5c6d0c905de1370f3c741251')
        }).then((result)=>{
                console.log(result);
        });
 //   db.close();
});