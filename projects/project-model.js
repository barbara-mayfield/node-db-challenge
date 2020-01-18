const db = require("../data/dbConfig")

function getProjects() {
    // SELECT p.id, p.name, p.description, p.completed, t.name AS task_name, t.completed 
    // FROM projects as p
    // JOIN tasks AS t ON t.id = p.id;
    return db("projects as p")
        .leftJoin("tasks as t")
        .select(
                "p.id", 
                "p.name", 
                "p.description", 
                "p.completed", 
                "t.name as task_name", 
                "t.completed"
        )
} 

function getProject(id){
    return db("projects")
        .where({id})
        .first();
}

async function addProject(data) {
	const [id] = await db("projects").insert(data)
	return db("projects").where({ id }).first()
}

module.exports = {
    getProjects,
    getProject,
    addProject,
}