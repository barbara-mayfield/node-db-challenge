exports.seed = async (knex) => {
  await knex("resources").insert([   
    { name: "Volcano examples can be found at this website:" },
    { name: "Egg carrier designs and schematics can be found at this website:" }
  ])
}
