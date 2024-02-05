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
app.use(cors())
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