import mongoose from "mongoose"
const connectDB=async(url)=>{
   try
   {

    await mongoose.connect(`${url}`)
    console.log(`connected to DB successfully`.blue.bold)
    return   
}
   catch(err)
   {
    console.log(`${err}`.red)
   }
}
export default connectDB