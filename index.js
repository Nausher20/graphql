const { ApolloServer } = require('apollo-server');
const mongoose=require('mongoose');
const typeDefs = require('./src/typedefs');  
const resolvers = require('./src/resolvers'); 
const MONGODB="mongodb://localhost:27017/";
const server =new ApolloServer({ typeDefs,resolvers});
mongoose.connect(MONGODB,{UseNewUrlParser:true}).then(()=>{
  console.log("MongoDb connection successful");
  return server.listen({port:5000});
}).then((res)=>{
 console.log('Server running at ${res.url}');
});





