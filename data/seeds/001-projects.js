exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    { name: "Project 1", description: "Description of Project 1" }, // 1
    { name: "Project 2", description: "Description of Project 2" }, // 2
    { name: "Project 3", description: "Description of Project 3" }, // 3
    { name: "Project 4", description: "Description of Project 4" } // 4
  ]);
};
