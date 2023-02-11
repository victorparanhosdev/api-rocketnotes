const AppError = require("../utils/AppError")

class UsersController{

 create(request, response){
    const {name, email, password} = request.body;

    if(!name){
        throw new AppError("o nome é obrigatório")
    }


    response.json({name, email, password})
 }
 show(request, response){
    const {name} = request.params;
    response.json({name})
 }
 
}


module.exports = UsersController;