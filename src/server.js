const express = require("express")

const {rott} = require("./routes/users.routes")

const app = express()

app.use(express.json())


const porta = 3333;

app.listen(porta, () => console.log(`funcionando a porta ${porta}`))