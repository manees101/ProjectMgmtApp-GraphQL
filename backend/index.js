import express from "express"
import dotenv from "dotenv"
import "colors"
import {graphqlHTTP} from "express-graphql"
import graphql from "graphql"
import schema from "./schema/schema.js"
import connectDB from "./db/connect.js"
import cors from "cors"
dotenv.config()
const port=process.env.PORT || 5000
const DBUrl=process.env.MONGO_URI
const app=express()
app.use("/",(req,res)=>{
    res.json("Hello from server")
})
var whitelist = ['https://project-mgmt-app-graphql.vercel.app']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use("/graphql",graphqlHTTP({
schema,
graphiql:process.env.NODE_ENV==="development"
}))

const startServer=async()=>{
try
{
    await connectDB(DBUrl)
    app.listen(port,()=>console.log(`server listening on ${port}`.yellow.bold))
}
catch(err)
{
console.log(`${err}`.red.bold)
}
}

startServer()