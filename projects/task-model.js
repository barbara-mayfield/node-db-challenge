const db = require("../data/dbConfig")

function getTasks(){
    return db("tasks").select("*")
} 

async function addTask(data) {
    const [id] = await db("tasks").insert(data)
    return db("tasks").where({ id }).first()
}

module.exports = {
    getTasks,
    addTask
}