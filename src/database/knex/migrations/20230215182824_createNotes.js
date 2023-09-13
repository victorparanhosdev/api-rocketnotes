const moment = require('moment-timezone');
const brazilTimezone = 'America/Sao_Paulo';
exports.up = knex => knex.schema.createTable("notes", table =>  {
  table.increments("id");
  table.text("title");
  table.text("description");
  table.integer("user_id").references("id").inTable("users");

  table.string('created_at').defaultTo(moment.tz(brazilTimezone).format('DD/MM/YYYY HH:mm:ss'));
  table.string('updated_at').defaultTo(moment.tz(brazilTimezone).format('DD/MM/YYYY HH:mm:ss'));
  
});



exports.down = knex => knex.schema.dropTable("notes");
