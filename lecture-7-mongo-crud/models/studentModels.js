import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    age: {
        type: Number,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique:true
    },
    city: {
        type: String,
        require:true
    },
})

const Student = new mongoose.model('Student', studentSchema)
export default Student