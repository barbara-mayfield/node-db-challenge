exports.seed = async (knex) => {
  await knex("tasks").insert([
    { task_name: "Make your egg container" },
    { task_name: "Test your project!" },
    { task_name: "Gather all materials for volcano" },
    { task_name: "Build your volcano" },
  ])
}