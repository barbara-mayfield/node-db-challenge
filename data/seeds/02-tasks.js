exports.seed = async (knex) => {
  await knex("tasks").insert([
    { name: "Gather all materials for volcano", project_id: 1 },
    { name: "Build your volcano", project_id: 1 },
    { name: "Make your egg container", project_id: 2 },
    { name: "Test your project!", project_id: 2 },
  ])
}