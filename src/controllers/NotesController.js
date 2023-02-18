const knex = require("../database/knex");

class NotesController {
    async create(req, res){
        
        const {title, description, tags, links} = req.body;
        const {user_id} = req.params;

        const note_id = await knex("notes").insert({
            title,
            description,
            user_id
        })
        const linksInsert = links.map(link => {
            return{
                note_id,
                url: link
            }
        })

        await knex("links").insert(linksInsert);

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        })

        await knex("tags").insert(tagsInsert)

        return res.json({
            note_id, linksInsert, tagsInsert
        })

    }
    async show(req, res){
        const {id} = req.params;

    const user = await knex("users").where({id}).first();
    const note = await knex("notes").where({ user_id: id }).first();
    const tags = await knex("tags").where({user_id: id}).orderBy("name")
    const links = await knex("links").where({note_id: id}).orderBy("created_at")


    return res.json({
        ...user,
        note,
        tags,
        links
    })

    }
    async delete(req, res) {
        const { id } = req.params;

        await knex("notes").where({id}).delete()

        return res.json({
            nota: id,
            message: "deletado com sucesso"
        })
    }

    async index(req, res) {
        const { user_id, title, tags, id } = req.query

        let notes;

        if(tags){
            const filteTags = tags.split(",").map(tag => tag.trim());
            notes = await knex("tags").whereIn("name", filteTags)

        }else {

            notes = await knex("notes").where({user_id})
            .whereLike("title", `%${title}%`).orderBy("title")
        }




        return res.json(notes)
    }
}

module.exports = NotesController;