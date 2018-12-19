const hbs = require("hbs")

hbs.registerHelper("anio",()=>{
    return new Date().getFullYear()
})
hbs.registerHelper("title",(title)=>{
    return `mark | ${title}`
})