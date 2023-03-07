const express = require("express")
const app = express();
app.use(require("cors")())
app.disable("x-powered-by")
app.set("keep-alive")
app.use(express.json())
const dbConnection = require("./Database/db")
const router = require("./routes/register")
dbConnection()

app.use(require("./routes/login"))
app.use(require("./routes/addsales"))
app.use(require("./routes/rev"))
app.use(require("./routes/topfive"))
app.use(router)




app.listen(3001 , ()=>{
console.log("hello")    
})