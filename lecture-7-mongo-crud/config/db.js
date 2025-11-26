import mongoose from "mongoose";
const MANGO_URI = "mongodb://localhost:27017/schoolDb"
const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('database connected successfully...');
            
        })
        await mongoose.connect(MANGO_URI)
    } catch (err) {
        console.log(err);
    }
}

export default connectDb