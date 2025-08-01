import mongoose from "mongoose";

const connectMongoDB = async() =>{
    try{

        await mongoose.connect(process.env.MONGODBURL);
    }  
    catch(error){
        console.log(error)
    }
}
export default connectMongoDB;