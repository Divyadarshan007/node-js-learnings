import express from 'express'
import Student from './models/studentModels.js';
import connectDb from './config/db.js';
const app = express()
const PORT = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
connectDb()
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/add-student', async(req, res)=>{
    const data = req.body;
    const newStudent = new Student(data)
    await newStudent.save()
    res.redirect('/')
})

app.listen(PORT, ()=>{})