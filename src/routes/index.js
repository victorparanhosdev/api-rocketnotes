const { Router } = require('express');

const routes = Router();

const usersRoutes = require("./users.routes")
const notesRoutes = require("./notes.routes")

function myMiddleware(req, resp, next) {
    if(!req.body.isAdmin){
      return resp.json({message: "não autorizado"})
    }

    next()
}

routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)


module.exports = routes;