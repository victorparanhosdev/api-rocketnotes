const { Router } = require('express');

const routes = Router();

const usersRoutes = require("./users.routes")

routes.use("/users", usersRoutes)
routes.use("/message", usersRoutes)


module.exports = routes;