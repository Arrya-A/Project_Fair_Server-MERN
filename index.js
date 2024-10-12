const express = require("express");
const cors = require("cors");
// used to load content of .env file into process.env
require("dotenv").config();



const pfserver = express()

pfserver.use(cors())
pfserver.use(express.json())

const PORT = 3000 || process.env.PORT

pfserver.listen(PORT, () => {
    console.log(`PFServer started at port: ${PORT} and waiting for client request!!!`);

})


//resolving client/browser request() using express
//resolving get request to http://localhost:3000/
pfserver.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:red;'> PFServer started at port and waiting for client request!!! </h1>`)
})


pfserver.post('/',(req,res)=>{
    res.status(200).send(`POST request received`)
})

pfserver.put('/',(req,res)=>{
    res.status(200).send(`PUT request received`)
})

pfserver.delete('/',(req,res)=>{
    res.status(200).send(`DELETE request received`)
})