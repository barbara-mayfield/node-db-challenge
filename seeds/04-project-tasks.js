exports.seed = async (knex) => {
  await knex("project_tasks").insert([
    { project_id: 1, task_id: 1 },
    { project_id: 2, task_id: 2 }
  ])
}
