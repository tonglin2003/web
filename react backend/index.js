import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "00000000",
    database: "user_data",
    port: "3306"
});

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/users", (req,res)=>{
    const q = "SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
}
)