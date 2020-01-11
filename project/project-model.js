const db = require("../db-config")

function getProjects(){
    return db("projects as p")
        .leftJoin("resources as r")
        .leftJoin("tasks as t")
        .select("p.id", "p.name as project_name", "p.description", "p.completed", "t.id", "t.task_name")
}

function getProject(id){
    return db("project")
        .where({id})
        .first();
}

function addProject(project){
    return db("project")
        .insert(project, "id")
        .then(ids => {
            const [id] = ids;
            return findProject(id)
        })
}

function getResources(project_id){
    return db("project as p")
        .join("resource as r", "p.id", "r.p_id")
        .select("r.id", "r.name", "r.description")
        .where("r.project_id", project_id)
}

function addResource(resource){
    return db("resource")
        .insert(resource)
        .then(ids => {
            const [id] = ids;
            return db("project")
                .where({ id })
                .first();
        })
}

function getTasks(project_id){
    return db("project as p")
        .select("p.name", "p.description", "t.task_name", "p.completed")
        .join("task as t", "p.id", "t.project_id")
        .where("t.project_id", project_id)
} 

function addTask(task){
    return db("task")
        .insert(task)
        .then(ids => {
            const [id] = ids;
            return db("task")
                .where({id})
                .first()
        })

}

module.exports = {
    getProjects,
    getProject,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}