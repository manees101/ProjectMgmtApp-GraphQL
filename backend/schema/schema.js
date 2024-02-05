import { clients,projects } from "./sampleData.js";
import {GraphQLObjectType,GraphQLID,GraphQLSchema, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLEnumType} from "graphql"
import Clients from "../models/client.js";
import Projects from "../models/project.js";
const ClientType=new GraphQLObjectType({
    name:"Client",
    fields:()=>({
      _id:{type:GraphQLID},
      name:{type:GraphQLString},
      address:{type:GraphQLString},
      email:{type:GraphQLString},
      phone:{type:GraphQLString}
    })
})
const ProjectType=new GraphQLObjectType({
    name:"Project",
    fields:()=>({
      _id:{type:GraphQLID},
      name:{type:GraphQLString},
      description:{type:GraphQLString},
      status:{type:GraphQLString},
      clientId:{type:GraphQLID},
      client:{
        type:ClientType,
        resolve:(parent,args)=>{
          
            return Clients.findOne({_id:parent.clientId})
        }
    }
    })
})
const RootQuery=new GraphQLObjectType({
    name:"RootQuery",
    fields:{
       client: {
        type:ClientType,
        args:{id:{type:GraphQLID}},
        resolve:(parent,args)=>(Clients.findOne({_id:args.id})),
        },
      project:{
        type:ProjectType,
        args:{id:{type:GraphQLID}},
        resolve:(parent,args)=>( Projects.findOne({_id:args.id}))
      },
      clients:{
        type:new GraphQLList(ClientType),
        resolve: (parent,args)=>( Clients.find())
      },
      projects:{
        type:new GraphQLList(ProjectType),
        resolve:(parent,args)=>(Projects.find())
      }
    }
})
const mutate=new GraphQLObjectType({
    name:"Mutate",
    fields:{
        addClient:{
            type:ClientType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                email:{type:GraphQLNonNull(GraphQLString)},
                address:{type:GraphQLString},
                phone:{type:GraphQLNonNull(GraphQLString)},
            },
            resolve:(parent,args)=>{
                return Clients.create({...args})
            }
        },
        deleteClient:{
            type:ClientType,
            args:{
                id:{type:GraphQLNonNull(GraphQLID)}
            },
            resolve:(parent,args)=>{
                Projects.find({ clientId: args.id }).then((projects) => {
                    // console.log(projects)
                    return projects.map((project) => {
                        console.log(project)
                     return Projects.findByIdAndDelete({_id:project._id});
                    });
                  });
                return  Clients.findByIdAndDelete({_id:args.id})
            }
        }
        ,
        addProject:{
            type:ProjectType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                description:{type:GraphQLNonNull(GraphQLString)},
                status:{type:new GraphQLEnumType({
                    name:"Status",
                    values:{
                        "new":{value:"Not Started"},
                        "progress":{value:"In Progress"},
                        "done":{type:"Completed"}
                    }
                })},
                clientId:{type:GraphQLNonNull(GraphQLID)}
            },
            resolve:(parent,args)=>{
                return Projects.create(args)
            }
        },
        deleteProject:{
            type:ProjectType,
            args:{
                id:{type:GraphQLID}
            },
            resolve:(parent,args)=>(Projects.findByIdAndDelete({_id:args.id}))
        },
        updateProject:{
            type:ProjectType,
            args:{
                id:{type:GraphQLID},
                 name:{type:GraphQLString},
                description:{type:GraphQLString},
                status:{type:new GraphQLEnumType({
                    name:"StatusUpdate",
                    values:{
                        "new":{value:"Not Started"},
                        "progress":{value:"In Progress"},
                        "done":{value:"Completed"}
                    }
                })
            }
            },
            resolve:(parent,args)=>{return Projects.findByIdAndUpdate({_id:args.id},{$set:{name:args?.name,description:args?.description,status:args?.status}},{new:true})}
        } 
    }
})
const schema= new GraphQLSchema({
    query:RootQuery,
    mutation:mutate
})
export default schema