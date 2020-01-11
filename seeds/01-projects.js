exports.seed = async (knex) => {
  await knex("projects").insert([   
    { name: "Paper Mache Volcano", description: "Create a paper mache volcano. Science!", completed: true  },
    { name: "Egg Drop", description: "Build a container that will protect an egg dropped from a long distance.", completed: true },
  ])
}
