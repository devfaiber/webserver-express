const express = require("express")
const app = express()
const hbs = require("hbs")

const helpers = require("./process/helpers")

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname+"/public"))

// anexar un directorio de parciales
hbs.registerPartials(__dirname+"/views/parciales")





// activo el hbs
app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("home",{
        nombre:"home",
        edad: 15
        
    })

})
app.get("/about",(req,res)=>{
    res.render("about",{
        nombre: "about",
        texto:"loremdsadadsad"
        
    })

})

app.listen(PORT,()=>{
    console.log("corriendo en puerto 3000")
})