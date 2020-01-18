exports.seed = async (knex) => {
  await knex("resources").insert([   
    { resource: "Volcano examples can be found at this website:", project_id: 1 },
    { resource: "Egg carrier designs and schematics can be found at this website:", project_id: 2 }
  ])
}
