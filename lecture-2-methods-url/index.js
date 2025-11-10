const http = require("http")
const PORT = 8000;

const url = require("url")

const server = http.createServer((req, res) => {

    if (req.url !== "/favicon.ico") {
        const val = url.parse(req.url, true)

        if (req.url == "/") {
            res.write("welcome to Home...")
        } else if (val.pathname == "/about") {
            res.write("welcome to About...")
        } else if (val.pathname == "/contact") {
            res.write("welcome to Contact...")
        } else {
            res.write("Error ! page not found...")
        }
        
    }

    res.end()
})
server.listen(PORT, () => {
    console.log(`Server is started on port : ${PORT}`);
})