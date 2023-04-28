const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// middlewears
app.use(express.json())
app.use(cors())

//connecting to database
const database = mysql.createConnection({
    host:'localhost',
    user:'yashwant',
    password:'password',
    multipleStatements:true,
    database:'react'
})

database.connect((err)=>{
    if(err)
    {
        console.log("Error in connecting")
    }
    else
    {
        console.log("Connected to MYSQL")
    }
})

// Get and Post Requests

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})