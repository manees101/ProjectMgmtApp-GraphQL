import mongoose from "mongoose";
import Clients from "./client.js";
const projectShema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide name"]
    },
    description:String,
    status:{
        type:String,
        enum:["Not Started","In Progress","Completed"]
    },
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Clients
    }
})

const Projects=new mongoose.model("Project",projectShema)

export default Projects