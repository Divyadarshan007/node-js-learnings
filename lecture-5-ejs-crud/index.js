const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

const students = [
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

app.listen(PORT, () => {
    console.log(`server is running on : ${PORT}`);
})

