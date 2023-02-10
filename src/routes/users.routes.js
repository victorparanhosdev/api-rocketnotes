const { Router } = require("express")

const usersRoutes = Router();


usersRoutes.get("/:name", (request, response)=>{
    const {name} = request.params;
    response.send(`o nome é ${name}`)

});

usersRoutes.post("/", (request, response) => {
    const {name, email, password} = request.body;
    response.json({name, email, password})
});

module.exports = usersRoutes;
