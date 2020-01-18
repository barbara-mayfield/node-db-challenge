exports.seed = async (knex) => {
  await knex("tasks").insert([
    { task_name: "Make your egg container", project_id: 1 },
    { task_name: "Test your project!", project_id: 1 },
    { task_name: "Gather all materials for volcano", project_id: 2 },
    { task_name: "Build your volcano", project_id: 2 },
  ])
}