const express=require("express");
const app=express();
const path=require("path");

let port=8080;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.listen(port,(req,res)=>{
  console.log("app is listening");
})

app.get("/ig/:username",(req,res)=>{
  
 const instaData=require("./data.json");
 console.log(instaData);
  let {username}=req.params;
  const data=instaData[username];
  console.log(data);
  res.render("home.ejs",{data});
});
app.get("/",(req,res)=>{
  res.send("home page");
});