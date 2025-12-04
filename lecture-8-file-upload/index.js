import express from 'express'
import connectDb from './config/db.js'
import multer from 'multer';
import Student from './models/studentModel.js';
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';


const app = express()
const PORT = 3000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }))

connectDb()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.random() * 100;
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.get('/', async (req, res) => {
    return res.render('index')
})
app.get('/display', async (req, res) => {

    const students = await Student.find()
    return res.render('display', {
        students
    })
})

app.post('/add-student', upload.single('file'), async (req, res) => {
    console.log(req.body);
    console.log(req.file.path);
    const newStudent = new Student({ photo: req.file.path, ...req.body })

    await newStudent.save()
    return res.redirect('/display')

})

app.get('/delete-student/:id', async (req, res) => {
    const { id } = req.params
    const student = await Student.findById(id)
    const imagePath =path  
    
    
    fs.unlink(imagePath, (err)=>{
        console.log(err);
        
    })
    await Student.findByIdAndDelete(id)
    return res.redirect('/display')
})
app.listen(PORT, () => { })

























