exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.string("name").notNullable()
        table.string("description")
        table.boolean("completed").defaultTo(false).notNullable()
    })
  
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.string("name").notNullable()
        table.boolean("completed").defaultTo(false).notNullable()

        table.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")  
    })
  
    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.string("resource").notNull()
  
        table.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })

    await knex.schema.createTable("projects_tasks", (table) => {
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
    })
}
  
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects") 
};
