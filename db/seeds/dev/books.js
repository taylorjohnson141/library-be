
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      // table.increments('id').primary();
      // table.string('title').notNullable();
      // table.string('author').notNullable();
      // table.string('cover').notNullable();
      // table.boolean('borrowed').notNullable();
      // table.boolean('read').notNullable();
      // table.timestamp('created_at').defaultTo(knex.fn.now())
      // table.timestamp('updated_at').defaultTo(knex.fn.now())
      return knex('books').insert([
        {id: 1, title: 'East of Eden' ,author:'John Steinbeck',cover:"", borrowed:false,read:true },
        {id: 2, title: '100 years of Solitude' ,author:'Gabriel García Márquez',cover:"", borrowed:false,read:true },
        {id: 3, title: 'The Stranger' ,author:'Albert Camus',cover:"", borrowed:false,read:true },
        {id: 4, title: 'The Sound and the Fury' ,author:'William Faulkner',cover:"", borrowed:false,read:false },
      ]);
    });
};
