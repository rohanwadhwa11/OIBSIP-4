const express = require('express');
const app = express();

const port = 8080;
let data = [];
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.post("/login",(req,res)=>{
    let {firstName,lastName,username,email,password} = req.body;
    console.log(username,password);
    data.push({firstName,lastName,username,email,password});
    res.render("login.ejs");
})

app.post("/dashboard",(req,res)=>{
    let {loginUsername,loginPassword} = req.body;
    console.log(loginUsername);
     data.forEach((e)=> {
        if(e.username == loginUsername){
            if(e.password == loginPassword){
                res.render("dashboard.ejs");
            }
        }else{
            res.send("your username or password must be incorrect");
        }
    });
 
})