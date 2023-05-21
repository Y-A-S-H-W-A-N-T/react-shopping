//express Setup

const express = require('express')
const app = express()
const cors = require('cors')

// middlewears

app.use(express.json())
app.use(cors())

// Database Connectivity

const mysql = require('mysql')

const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    multipleStatements:true,
    database:'website'
})

database.connect((err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Connected to MYSQL")
    }
})

// Server Listening

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})

// Get and Post Requests

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

app.post('/login',(req,res)=>{
    const user = req.body.user
    const password = req.body.password
    var flag = 1
    const query = `SELECT * FROM website.credentials;`
    database.query(query,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            for(let i=0;i<data.length;i++)
            {
                if(data[i].username===user && data[i].password===password)
                {   
                    console.log("Yes")
                    // res.json({msg:"LOGED IN",status:'validUser'})
                    flag = 0
                    break
                }
            }
            if(flag === 1)
            {   
                console.log("NO")
                // res.json({msg:"WRONG CREDENTIALS",status:'invalidUser'})
            }
        }
    })
})