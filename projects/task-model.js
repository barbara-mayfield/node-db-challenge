const db = require("../data/dbConfig")

function getTasks(id){
    // SELECT * FROM tasks AS t
    // JOIN projects AS p ON p.id = t.project_id;
    return db("tasks as t")
        .join("projects as p")
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