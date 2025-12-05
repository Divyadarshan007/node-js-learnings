import express from 'express'
import connectDb from './config/db.js'
import studentRouter from './routes/student.routes.js';

const app = express()
const PORT = 3000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }))

connectDb()

app.use('/', studentRouter)

app.listen(PORT, () => { })