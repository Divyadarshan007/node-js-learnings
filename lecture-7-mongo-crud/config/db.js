import mongoose from "mongoose";

const MANGO_URI = "mongodb://localhost:27017/schoolDb"
const connectDb = async () => {
    try {
      
        await mongoose.connect(MANGO_URI)
    } catch (err) {
        console.log(err);
    }
}

export default connectDb 