exports.seed = async (knex) => {
  await knex("tasks").insert([
    { name: "Make your egg container", project_id: 1 },
    { name: "Test your project!", project_id: 1 },
    { name: "Gather all materials for volcano", project_id: 2 },
    { name: "Build your volcano", project_id: 2 },
  ])
}