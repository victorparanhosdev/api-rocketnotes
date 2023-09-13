require("express-async-errors")
require("dotenv/config")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const express = require("express")
const routes = require("./routes")
const uploadConfig = require("./config/upload")
const cors = require("cors")
migrationsRun()

const app = express();

app.use(express.json());
app.use(cors())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, request, response, next) => {

    if(error instanceof AppError){
    
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        })
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })

})


const porta = 3333;
app.listen(porta, () => console.log(`funcionando a porta ${porta}`))