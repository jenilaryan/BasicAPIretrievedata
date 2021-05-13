const express =require("express")
const app=express();
const https=require("https");
app.listen(3000,function()
{
console.log("we are listening");
});


app.get("/",function(request,response)
{
const url="https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=3d18dba3af2bc10f5f606968b75d14e4";
https.get(url,function(response)
{
  
  console.log(response.statusCode);

});
});
