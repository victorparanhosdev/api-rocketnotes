const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require("../config/upload")

const usersRoutes = Router();
const UsersController = require("../controllers/UserController");
const usersController = new UsersController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const upload = multer(uploadConfig.MULTER)



usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.post("/", usersController.create);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {

  console.log(request.file.filename)
  response.json()
})

module.exports = usersRoutes;