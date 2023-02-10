
const {Router} = require("express")

const rott = Router()
rott.post("/users", (request, response)=> {

    const {name, email, password} = request.body;

    response.json({name, email, password})
});

module.exports = rott;