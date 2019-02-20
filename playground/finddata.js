const {MongoClient, ObjectID}  = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');

//    db.collection('Todos').find({completed : true,
//      _id: new ObjectID('5c6bfe07186eaf7d5e67677f')
//    }).toArray().then((docs)=>{
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    },(err)=>{
//        console.log('unable to fetch todos', err);
   
//    });

db.collection('Users').find({Name:'Yogesh Barot'
    
  }).toArray().then((docs)=>{
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 3));
  },(err)=>{
      console.log('unable to fetch todos', err);
  
  });

 //   db.close();
});