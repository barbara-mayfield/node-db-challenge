const db = require("../data/dbConfig")

function getTasks(){
    // SELECT p.id, p.name, p.description, t.name AS task_name FROM projects AS p
    // JOIN projects_tasks AS pt
    // JOIN tasks as t ON pt.task_id = t.id;
    return db("projects as p")
        .join("projects_tasks as pt")
        .join("tasks as t")
        .select("p.id", "p.name", "p.description", "t.name as task_name")
} 

async function addTask(data) {
    const [id] = await db("tasks").insert(data)
    return db("tasks").where({ id }).first()
}

module.exports = {
    getTasks,
    addTask
}