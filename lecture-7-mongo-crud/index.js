import express from "express";
import Student from "./models/studentModels.js";
import connectDb from "./config/db.js";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
connectDb()
app.get("/", async (req, res) => {
    try {
        const students = await Student.find({})
        res.render("index", {
            students
        });
    } catch (error) {
        console.log(error);

    }
});

app.get("/delete-student", async (req, res) => {
    const { deleteId } = req.query
    try {
        await Student.findByIdAndDelete(deleteId)
        return res.redirect('/')
    } catch (error) {

    }
});
app.get("/edit-student", async (req, res) => {
    const { editId } = req.query
    try {
        const data = await Student.findById(editId)
        return res.render('edit', {
            data
        })
    } catch (error) {
        console.log(error);

    }
});
app.post("/edit-student", async (req, res) => {
    const { id, ...data } = req.body;
    try {
        await Student.findByIdAndUpdate(id, data)
        return res.redirect('/')
    } catch (error) {
        console.log(error);

    }
});

app.post("/add-student", async (req, res) => {
    const data = req.body;
    const newStudent = new Student(data);
    await newStudent.save();
    res.redirect("/");
});

app.listen(PORT, () => { });
