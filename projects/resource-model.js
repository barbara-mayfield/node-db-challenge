const db = require("../data/dbConfig")

function getResources(){
    return db("resources").select("*")
} 

async function addResource(data) {
    const [id] = await db("resources").insert(data)
	return db("resources").where({ id }).first()
}

module.exports = {
    getResources,
    addResource
}