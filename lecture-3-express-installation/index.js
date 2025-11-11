const express = require("express")
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        h1{
            color: white;
        }
    </style>
</head>
<body>
    <div>
        <h1>Welcome to Home</h1>
    </div>
</body>
</html>`)

})

app.get("/about", (req, res) => {
    res.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        h1{
            color: white;
        }
    </style>
</head>
<body>
    <div>
        <h1>About : ${req.query.name}</h1>
    </div>
</body>
</html>`)

    res.send()
})

app.listen(PORT, () => {
    console.log(`Server started : http://localhost:${PORT}`)
})
