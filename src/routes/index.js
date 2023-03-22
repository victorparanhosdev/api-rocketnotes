const { Router } = require('express');

const routes = Router();

const usersRoutes = require("./users.routes")
const notesRoutes = require("./notes.routes")
const tagsRoutes = require("./tags.routes")
const sessionsRoutes = require("./sessions.routes");
const { route } = require('./sessions.routes');
function myMiddleware(req, resp, next) {
    if(!req.body.isAdmin){
      return resp.json({message: "não autorizado"})
    }

    next()
}
routes.use("/sessions", sessionsRoutes)
routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)


module.exports = routes;