exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    { description: "This action 1", notes: "Here are the steps to complet action 1", project_id: 1 }, // 1
    { description: "This action 2", notes: "Here are the steps to complet action 2", project_id: 1 }, // 2
    { description: "This action 3", notes: "Here are the steps to complet action 3", project_id: 1 }, // 3
    { description: "This action 4", notes: "Here are the steps to complet action 4", project_id: 2 }, // 4
    { description: "This action 5", notes: "Here are the steps to complet action 5", project_id: 2 }, // 5
    { description: "This action 6", notes: "Here are the steps to complet action 6", project_id: 3 }, // 6
    { description: "This action 7", notes: "Here are the steps to complet action 7", project_id: 3 }, // 7
    { description: "This action 8", notes: "Here are the steps to complet action 8", project_id: 3 }, // 8
    { description: "This action 9", notes: "Here are the steps to complet action 9", project_id: 4 }, // 9
    { description: "This action 10", notes: "Here are the steps to complet action 10", project_id: 4 }, // 10
    { description: "This action 11", notes: "Here are the steps to complet action 11", project_id: 4 }, // 11
    { description: "This action 12", notes: "Here are the steps to complet action 12", project_id: 4 } // 12
  ]);
};