import mongoose from "mongoose";
const cleintSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide name"]
    },
    email:{
        type:String,
        required:[true,"Please provide email"]
    },
    address:String,
    phone:String
})

const Clients=new mongoose.model("Client",cleintSchema)
export default Clients