import Student from "../models/studentModel.js";
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const addStudent = async (req, res) => {
    console.log(req.body);
    console.log(req.file.path);
    const newStudent = new Student({ photo: req.file.path, ...req.body })

    await newStudent.save()
    return res.redirect('/display')

}

const deleteStudent = async (req, res) => {
    const { id } = req.params
    const student = await Student.findById(id)
    const imagePath = path.join(__dirname, student.photo)

    fs.unlink(imagePath, (err) => {
        console.log(err);

    })
    await Student.findByIdAndDelete(id)
    return res.redirect('/display')
}

const editStudent = async (req, res) => {
    const { id } = req.params
    const student = await Student.findById(id)
    return res.render('edit', {
        student
    })

}

const updateStudent = async (req, res) => {
    const { id } = req.params
    const updatedData = req.body
    const student = await Student.findById(id)

    if (req.file) {
        const oldImagePath = path.join(__dirname, student.photo)
        console.log(oldImagePath);


        fs.unlink(oldImagePath, (err) => {
            console.log(err)
        })

        const newImagePath = req.file.path
        updatedData.photo = newImagePath
    }

    await Student.findByIdAndUpdate(id, updatedData)
    return res.redirect('/display')
}

const displayStudent = async (req, res) => {

    const students = await Student.find()
    return res.render('display', {
        students
    })
}

export { addStudent, deleteStudent, editStudent, updateStudent, displayStudent }