exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl
        .string("description", 250)
        .notNullable();

      tbl.boolean("complete").defaultTo(false);
    })
    .createTable("actions", tbl => {
      tbl.increments();

      tbl
        .string("description", 128)
        .notNullable();

      tbl.string("notes", 250);
      tbl.boolean("complete").defaultTo(false);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions").dropTableIfExists("projects");
};
