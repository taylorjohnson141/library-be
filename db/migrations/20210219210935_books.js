
exports.up = function(knex,Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('cover').notNullable();
    table.boolean('borrowed').notNullable();
    table.boolean('read').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
