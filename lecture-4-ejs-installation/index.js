const express = require('express')

const app = express()
const PORT = 8000;
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, (err) => {
    if (err) {
        console.log('server me khich khich');
    }
    console.log(`server is running on : http://localhost:${PORT}`);
    
})