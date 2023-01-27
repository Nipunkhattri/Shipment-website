const express =require("express");
const app=express();
const mysql=require("mysql2");
const bodyParse=require("body-parser");
const cors=require("cors");

const db=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"contact"
});



app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({extended:true}));


app.get("/api/get",(req,res)=>{
  const sqlGet="SELECT * FROM contact_db";
  db.query(sqlGet,(error,result)=>{
    console.log(result);
    res.send(result);
  })
})

app.get("/",(req,res)=>{
  const sqlInsert="INSERT INTO contact_db (name,email,contact) VALUES ('john','john@gmail.com',23456)";
  db.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("Hello express")
    
  })

})

app.listen(5000,()=>{
  console.log("Server is running on port 5000")
})