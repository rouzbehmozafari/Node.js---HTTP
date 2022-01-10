const fs = require('fs')
const http = require('http')
const port = 8080

function pageReader(address,res){
    fs.readFile(address,(err,data)=>{
        if (err){
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end()
        }
        else {
            const page = data.toString()
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(page)
        }
    })
}

const server = http.createServer((req,res)=>{
    console.log('request Address:', req.url , 'Method:', req.method)
    switch (req.url){
        case '/':
            pageReader('public/Pages/Home.html',res)
            break
        case '/About':
            pageReader('public/Pages/About.html',res)
            break
        case '/Contact':
            pageReader('public/Pages/Contact.html',res)
            break
        case '/FAQ':
            pageReader('public/Pages/FAQ.html',res)
            break
        case '/Styles/Styles.css':
            fs.readFile('public/Styles/Styles.css',(err,data)=>{
                if (err){
                    res.writeHead(500,{'Content-Type':'text/html'})
                    res.end()
                }
                else {
                    const page = data.toString()
                    res.writeHead(200,{'Content-Type':'text/css'})
                    res.end(page)
                }
            })
            break
        default:
            res.writeHead(404)
            res.end()
                
    }
})
server.listen(port,()=>{console.log('Server is listening on port: ',port)})