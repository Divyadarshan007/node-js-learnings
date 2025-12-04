import mongoose from "mongoose";
const MONGO_URI = 'mongodb://localhost:27017/schoolDb'
const connectDb = async() => {
    try {
       await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDb
