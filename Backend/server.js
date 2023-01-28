const express =require("express");
const app=express();
const mysql=require("mysql2");
const bodyParse=require("body-parser");
const cors=require("cors");

const db=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"shippersolution"
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
app.post("/register",(req,res)=>{
  let {name,email,password,phoneno,address,country,comName}=req.body
  console.log(req.body)
  const sqlInsert=`INSERT INTO users (name,address,company,phone_No,password,email,country) VALUES ('${name}','null','${comName}','${phoneno}','${password}','${email}','${country}')`
  db.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
})

app.post("/login",(req,res)=>{
  console.log(req.body)
  const sqlFind=`SELECT * FROM users WHERE email='${req.body.email}' AND password='${req.body.password}';`
  db.query(sqlFind,(err,result)=>{
    if(result.length>0){

      console.log("error",err);
      console.log("result",result);
      res.send(result)
    }
    else{
      res.send(401)
    }
  })
})
//-----------get countries=--------------------1)(final)
app.get('/ware/:id',(req,res)=>{
  const {id}=req.params
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"warehouses"
  });
  
  const sqlData=`SELECT DISTINCT country FROM houses WHERE owner='${id}'; `
  dbuser.query(sqlData,(err,result)=>{
    console.log(result)

      console.log("error",err);
      console.log("result",result);
      res.send(result)
  })

  // console.log(id)
})
//------------------------------add warehouse------------------(final)

app.post("/add_ware/:id/:country",(req,res)=>{
  let {id}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"warehouses"
  });
  const sqlInsert=`INSERT INTO houses (country,warehouseuid,owner) VALUES ('${req.params.country}','${req.body.warehouseuid}','${req.params.id}');`
   dbuser.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//--------------------add warehouses with countries-------------2)(final)
app.post("/add_ware/:id",(req,res)=>{
  let {id}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"warehouses"
  });
  const sqlInsert=`INSERT INTO houses (country,warehouseuid,owner) VALUES ('${req.body.country}','${req.body.warehouseuid}','${req.body.owner}');`
   dbuser.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
///--------------------add products---------------3)(final)

app.post("/add_product/:id/:country/:uid",(req,res)=>{
  let {id}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"item"
  });
  const sqlInsert=`INSERT INTO catogeries (warehouseid,item,quantity,owner,country) VALUES ('${req.params.uid}','${req.body.product}',${req.body.quantity},'${req.params.id}','${req.params.country}');`
   dbuser.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//--------------------get products--------4)(final)
app.get('/get_product/:id/:country/:uid',(req,res)=>{
  const {id,country}=req.params
  console.log(country)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"item"
  });
  const sqlData=`SELECT item,quantity FROM catogeries  WHERE  warehouseid='${req.params.uid}';`
  dbuser.query(sqlData,(err,result)=>{
    console.log("wokring")
    console.log(result)
    // if(result.length>0){
      console.log("error",err);
      console.log("result",result);
      res.send(result)
    // }
    // else{
      // res.send(401)
    // }
  })
})
//--------------get ware data--------------------------5)(final)
app.get('/ware/:id/:country',(req,res)=>{
  const {id,country}=req.params
  console.log("this is get request for ware")
  console.log(country)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"warehouses"
  });
  const sqlData=`SELECT warehouseuid  FROM houses WHERE  owner='${id}' AND country='${country}';`
  dbuser.query(sqlData,(err,result)=>{
    console.log("wokring")
    console.log(result)
    // if(result.length>0){
      console.log("error",err);
      console.log("result",result);
      res.send(result)
    // }
    // else{
    //   res.send(401)
    // }
  })
})


//------------------------delete country ----------------------final
app.get('/del_country/:id/:country',(req,res)=>{
  console("this is delete commnad")
  const {id,country}=req.params
  console.log(country)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"item"
  });
  const sqlData=`DELETE FROM catogeries WHERE owner='${id}' AND country='${country}'`
  dbuser.query(sqlData,(err,result)=>{
    console.log("wokring")
    console.log(result)
    if(result.length>0){
      console.log("error",err);
      console.log("result",result);
    }
    else{
      console.log(err)
    }

  })

  const dbuser1=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"warehouses"
  });
  const sqlData1=`DELETE FROM houses WHERE owner='${id}' AND country='${country}'`
  dbuser1.query(sqlData1,(err,result)=>{
    console.log("wokring")
    console.log(result)
    if(result.length>0){
      console.log("error",err);
      console.log("result",result);
    }
    else{
      console.log(err)
    }
    res.send(200)

  })
})
//----------------------------------------------------------------------------------------------
//--------------------------delete warehouse----------------------(final)
app.get('/del_ware/:id/:uid',(req,res)=>{
  const {id,uid}=req.params
  console.log("this is delete command")
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"item"
  });
  const sqlData=`DELETE FROM catogeries WHERE warehouseid='${uid}'`
  dbuser.query(sqlData,(err,result)=>{
    console.log("wokring")
    console.log(result)
    if(result.length>0){
      console.log("error",err);
      console.log("result",result);
    }
    else{
      console.log(err)
    }

  })

  const dbuser1=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"warehouses"
  });
  const sqlData1=`DELETE FROM houses WHERE warehouseuid='${uid}'`
  dbuser1.query(sqlData1,(err,result)=>{
    console.log("wokring")
    console.log(result)

      console.log("error",err);
      console.log("result",result);
    res.send(200)

  })
})

//---------------------------------------------------------------------------


//------------------------------------------delete product--------------------------------(final)

app.get("/del_product/:id/:uid",(req,res)=>{
  let {id,uid}=req.params
  
  console.log(uid)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"item"
  });
  const sqlDelete=`DELETE FROM catogeries WHERE warehouseid='${uid}';`

  dbuser.query(sqlDelete,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//--------------------------------------------------------------------------------------------------

//------------------------edit product--------------------(final)

app.post("/edit_product/:id/:country/:uid/:product",(req,res)=>{
  let {id,country,uid,product}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"item"
  });
  const sqlInsert=`UPDATE catogeries SET item='${req.body.product}' ,quantity=${req.body.quantity} WHERE warehouseid='${uid}';`

  dbuser.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//--------------------(--ship-----------------(final)
app.post("/ship/:id/:country/:uid/:product",(req,res)=>{
  let {id,country,uid,product}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"orders"
  });
  const sqlInsert=`INSERT INTO  orderdata (fro,tom,warehouseid,date,country,quantity,status,owner) VALUES ('${country}','${req.body.destination}','${uid}','${req.body.shipdate}','China','${req.body.quantity}','pending','${id}');`
  dbuser.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//---------------------shipments------------------------


app.get("/shipment/:id",(req,res)=>{
  let {id}=req.params
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"orders"
  });
  const sqlDelete=`SELECT * FROM orderdata WHERE owner='${id}';` 

  dbuser.query(sqlDelete,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
// -----------------add warehouse--------------------------6)
app.post("/ware/:id/:country/:product",(req,res)=>{
  let {id}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:id
  });
  const sqlCreateCountry=`UPDATE ${req.params.country} SET product='${req.body.product}',quantity=${req.body.quantity},volume=${req.body.volume} WHERE (product='${req.params.product}')`
  dbuser.query(sqlCreateCountry,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//----------addPropduct-------------
app.post("/ware/:id/:country",(req,res)=>{
  let {id,country}=req.params
  console.log(req.body)
  console.log(id)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:id
  });
  const sqlInsert=`INSERT INTO ${country} (product,quantity,volume) VALUES ('${req.body.product}',${req.body.quantity},${req.body.volume})`

  dbuser.query(sqlInsert,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//---------------editProduct--------------------

//--------------delete country-------------------
app.post("/waredelete/:id/:country",(req,res)=>{
  let {id,country}=req.params
  // console.log(req.body)
  // console.log(id)
  console.log(req.params)
  const dbuser=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:id
  });
  const sqlDelete=`DELETE FROM warehouse WHERE country='Pakistan'`

  dbuser.query(sqlDelete,(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("200")
  })
  // res.send(200)
})
//--------------delete product-------------------------


app.listen(5000,()=>{
  console.log("Server is running on port 5000")
})