const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require("../config/upload")

const usersRoutes = Router();
const UsersController = require("../controllers/UserController");
const UsersAvatarController = require("../controllers/UserAvatarController");
const usersController = new UsersController()
const usersAvatarController = new UsersAvatarController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const upload = multer(uploadConfig.MULTER)



usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.post("/", usersController.create);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update)

module.exports = usersRoutes;