exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.string("name").notNull()
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.string("task_name").notNull()
      table.boolean("completed")
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.string("name").notNull()
  })

  await knex.schema.createTable("project_tasks", (table) => {
      table.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("task_id")
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")  
      table.primary(["project_id", "task_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("projects") 
};
