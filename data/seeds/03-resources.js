exports.seed = async (knex) => {
  await knex("resources").insert([   
    { id: 1, resource: "Volcano examples can be found at this website:" },
    { id: 2, resource: "Egg carrier designs and schematics can be found at this website:" }
  ])
}
