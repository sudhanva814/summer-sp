const express=require('express');
const app=express();

const mysql=require("mysql")
const cors=require('cors');

app.use(cors())
app.use(express.json())

//DATABASE CONNECTION
const db=mysql.createPool({
host:'localhost',
user:"sudhanva",
password:"password",
database:"bankingcust"
});

//LISTENING IN PORT 8000
app.listen(8000,()=>{
 console.log("hello there!")
});

//Retrieve username
app.post("/getuser",(req,res)=>{
    const userid=req.body.userid;
    db.query(`select * from customers where id=?`,[userid],(err,result)=>{
        res.send(result)
    })
});

//Update customer Balance
app.post("/updatecust",(req,res)=>{
    const name=req.body.name;
    const amount=req.body.amount;

    db.query('update customers set currentbal=currentbal+? where name=?',[amount,name],(err,result)=>{
        console.log(result)
    })
})

//Customer who transferred Money
app.post("/fromcust",(req,res)=>{
    const name=req.body.name;
    const amount=req.body.amount;

    db.query('update customers set currentbal=currentbal-? where name=?',[amount,name],(err,result)=>{
        console.log(result)
    })
})

//Retrieve Transaction History
app.post("/getHistory",(req,res)=>{
    db.query('select * from history',(err,result)=>{
        res.send(result)
    })
})

//Add field to Transaction History
app.post("/newHistory",(req,res)=>{
    const name=req.body.name;
    const amount=req.body.amount;
    const toname=req.body.toname;

    db.query('insert into history (fromname,amount,dateandtime,toname) values (?,?,NOW(),?)',[name,amount,toname],(err,result)=>{
        console.log(result)
    })
})

//Retrieve all customer data
app.post("/cust",(req,res)=>{
    db.query(`select * from customers`,(err,result)=>{
        res.send(result)
        console.log(result);
 })
});