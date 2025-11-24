const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000;
const connectDb = async () => {
    // await mongoose.connect('mongodb://localhost:27017').then(()=>{
    //     console.log('database connected succefully');

    // }).catch((err)=>{
    //     console.log(err);

    // })  -> METHOD 1

    // try {
    //     await mongoose.connect('mongodb://localhost:27017')
    //     console.log('database connected succefully');
    // } catch (err) {
    //     console.log(err);

    // } -> METHOD 2

    // mongoose.connection.on('connected', () => {
    //     console.log('database connected succefully');

    // })
    // await mongoose.connect('mongodb://localhost:27017')  -> METHOD 3

}

connectDb()

app.listen(PORT, () => {

})