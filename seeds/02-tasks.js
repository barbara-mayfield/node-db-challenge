exports.seed = async (knex) => {
  await knex("tasks").insert([
    { task_name: "Make your egg container", completed: true },
    { task_name: "Test your project!", completed: false },
    { task_name: "Gather all materials for volcano", completed: true },
    { task_name: "Build your volcano", completed: false},
  ])
}