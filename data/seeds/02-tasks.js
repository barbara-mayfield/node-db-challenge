exports.seed = async (knex) => {
  await knex("tasks").insert([
    { id: 1, name: "Gather all materials for volcano", project_id: 1, completed: false },
    { id: 2, name: "Build your volcano", project_id: 1, completed: false },
    { id: 3, name: "Make your egg container", project_id: 2, completed: true },
    { id: 4, name: "Test your project!", project_id: 2, completed: false },
  ])
}