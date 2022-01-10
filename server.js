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
function imgReader(address,res){
    fs.readFile(address,(err,data)=>{
        if (err){
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end()
        }
        else {
            res.writeHead(200,{'Content-Type':'image/jpeg'})
            res.end(data)
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
        case '/How':
            pageReader('public/Pages/Contact.html',res)
            break
        case '/Categories':
            pageReader('public/Pages/FAQ.html',res)
            break
        case '/Testimony':
            pageReader('public/Pages/FAQ.html',res)
            break
        case '/images/Group%2028.png':
            imgReader('public/images/Group 28.png',res)
            break
        case '/images/tish.png':
            imgReader('public/images/tish.png',res)
            break
        case '/images/vector.png':
            imgReader('public/images/vector.png',res)
            break
        case '/images/pinkVector.png':
            imgReader('public/images/pinkVector.png',res)
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