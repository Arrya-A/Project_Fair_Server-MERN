const express = require("express");
const cors = require("cors");
// used to load content of .env file into process.env
require("dotenv").config();
const router = require("./routes/router")
require("./dbConnections/connection")

const pfserver = express()

pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(router)
pfserver.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfserver.listen(PORT, () => {
    console.log(`PFServer started at port: ${PORT} and waiting for client request!!!`);

})


//resolving client/browser request() using express
//resolving get request to http://localhost:3000/
pfserver.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:red;'> PFServer started at port and waiting for client request!!! </h1>`)
})

