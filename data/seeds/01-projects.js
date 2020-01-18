exports.seed = async (knex) => {
  await knex("projects").insert([   
    { id: 1, name: "Paper Mache Volcano", description: "Create a paper mache volcano. Science!", completed: true  },
    { id: 2, name: "Egg Drop", description: "Build a container that will protect an egg dropped from a long distance.", completed: true },
  ])
}
