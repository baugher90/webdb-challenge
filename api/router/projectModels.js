const db = require("../../data/dbConfig");

module.exports = {
  find,
  findById,
  findProjectActions,
  add,
  update,
  remove
};

function find() {
  return db(`projects`);
}
function findById(id) {
  return db(`projects`).where({ id });
}
function findProjectActions(id) {
    return db(`actions`).where({ id });
  }
function add(project) {
  return db(`projects`).insert(project, `id`);
}
function update(id, changes) {
  return db(`projects`)
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db(`projects`)
    .where({ id })
    .delete();
}