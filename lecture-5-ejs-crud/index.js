const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let students = [
    {
        id: 1,
        name: 'Divyadarshan Das',
        grid: 8215,
        course: 'FSD'
    },
    {
        id: 2,
        name: 'John Doe',
        grid: 7263,
        course: 'FSD'
    },
    {
        id: 3,
        name: 'Jessica Doe',
        grid: 8374,
        course: 'FSD'
    },

]

app.get('/', (req, res) => {
    res.render('index', {
        students
    })
})
app.get('/add-student', (req, res) => {
    res.render('form')
})

app.post('/add-student', (req, res) => { 
    students.push(req.body)
    return res.redirect('/')
})

app.get('/delete-student', (req, res) => {
    console.log(req.query.stdId);
    
    students = students.filter((student) => {
        return student.id !== Number(req.query.stdId)
    })

    return res.redirect('/')

})
app.get('/edit-student', (req, res)=>{
    students
})

app.listen(PORT, () => {
    console.log(`server is running on : ${PORT}`);
})

