const knex = require("../database/knex");

class NotesController {
    async create(req, res){
        const {title, description, tags, links} = req.body;
        const {user_id} = req.params;

        

    }
}

module.exports = NotesController;