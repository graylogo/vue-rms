const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express();

// users.js
const user = require("./routers/api/user")

// DB config
const db = require("./config/key").mongoURL

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

// 连接 mongoDB
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>{console.log("连接数据库成功")})
    .catch(err => {console.log(err)})
app.get("/",(req,res)=>{
    res.send("Hello")
})

// 使用router
app.use("/api/user", user)

const port = process.env.PORT || 5000;

app.listen (port, ()=>{
    console.log("hello")
})