const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } =require("./config/admin");
const app=express();
app.use(bodyParser.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());

app.get("/sdfdhjsjh",async(req,res)=>{
    try{
        db.collection("books").get().then((snapshot)=>{
            const data= snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    ...doc.data()
                }
            ))
            res.status(200).json(data)
        })
    }catch(err){
        res.status(500).json(err)
    }
})

app.post("/sdfdhjsjh",async(req,res)=>{
    try{
        const data={
            ...req.body
        }
    db.collection("books").add(data)
    res.status(200).json(data)
  
    }catch(err){
        res.status(500).json(err)
    }
})

app.put("/:id",async(req,res)=>{
    try{
        const data={
            ...req.body
        }
    db.collection("books").doc(req.params.id).update(data)
    res.status(200).json(data)
  
    }catch(err){
        res.status(500).json(err)
    }
})

app.put("/:id",async(req,res)=>{
    try{
        const data={
            ...req.body
        }
    db.collection("books").doc(req.params.id).delete()
    res.status(200).json(data)
  
    }catch(err){
        res.status(500).json(err)
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})