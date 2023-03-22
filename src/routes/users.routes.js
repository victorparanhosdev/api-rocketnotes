const { Router } = require("express");

const usersRoutes = Router();
const UsersController = require("../controllers/UserController");
const usersController = new UsersController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")




usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.post("/", usersController.create);
//usersRoutes.delete("/:id", usersController.delete);


module.exports = usersRoutes;