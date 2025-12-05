import express from 'express'
import { addStudent, deleteStudent, displayStudent, editStudent, updateStudent } from '../controller/student.controller.js'
import upload from '../middlewares/multer.js'
const router = express.Router()

router.get('/', async (req, res) => {
    return res.render('index')
})

router.post('/add-student', upload.single('file'), addStudent)

router.get('/delete-student/:id', deleteStudent)

router.get('/edit-student/:id', editStudent)
router.post('/edit-student/:id', upload.single('file'), updateStudent)

router.get('/display', displayStudent)

export default router