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
app.post('/signup',(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const phone = req.body.phone
    const date = req.body.date
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    const query = `INSERT INTO website.credentials (username, email, phone, date, password) VALUES ('${username}', '${email}', '${phone}', '${date}', '${password}');`
    if(phone.length===10)
    {
        if(password===confirmpassword)
        {
             database.query(query,(err,data)=>{
                if(err){
                res.json({msg:"Error in fetching data from database",status:1000})
                }
                else{
                res.json({msg:"SIGNED IN",status:200})
                console.log("User created with name => ",username)
                }
            })
        }
        else
        {
            res.json({msg:"PASSWORDS MUST MATCH WITH THE CONFIRMPASSWORD",status:'mismatch'})
        }
    }
    else
    {
        res.json({msg:"Invalid Phone number",status:'invalid number'})
    }
    
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