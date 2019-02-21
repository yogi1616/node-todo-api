const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{
    text: 'first test todo'
},
{
    text: 'second test todo'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then((e)=>done());
});

describe('POST /todos',()=>{
    it('should create new todo',(done)=>{
           var text = 'Test todo text';

           request(app)
           .post('/todos')
           .send({text})
           .expect(200)
           .expect((res)=>{
               expect(res.body.text).toBe(text);
           })
           .end((err, res)=>{
               if(err){
                   return done(err);
               }

               Todo.find({text}).then((todos)=>{
                   expect(todos.length).toBe(1);
                   expect(todos[0].text).toBe(text);
                   done();
               }).catch((e)=>done(e));
           });
    });

    it('should not create todo with invalid body data',(done)=>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) =>{
            if(err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=>done(e));
        });
        
    });
});

describe('GET /todos', ()=>{
it('should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
});
});

const users = [{
    email: 'random1@inx.com'
},
{
    email: 'random2@inx.com'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return User.insertMany(users);
    }).then((e)=>done());
});

describe('POST /users',()=>{
    it('should create new user',(done)=>{
           var email = 'yogeshbarot@gmail.com';

           request(app)
           .post('/users')
           .send({text})
           .expect(200)
           .expect((res)=>{
               expect(res.body.text).toBe(text);
           })
           .end((err, res)=>{
               if(err){
                   return done(err);
               }

               Todo.find({text}).then((users)=>{
                   expect(users.length).toBe(1);
                   expect(users[0].text).toBe(text);
                   done();
               }).catch((e)=>done(e));
           });
    });

    it('should not create user with invalid body data',(done)=>{
        request(app)
        .post('/users')
        .send({})
        .expect(400)
        .end((err, res) =>{
            if(err){
                return done(err);
            }
            Todo.find().then((users)=>{
                expect(users.length).toBe(2);
                done();
            }).catch((e)=>done(e));
        });
        
    });
});

describe('GET /users', ()=>{
it('should get all users', (done) => {
        request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
            expect(res.body.users.length).toBe(2);
        })
        .end(done);
});
});