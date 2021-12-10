const knex = require("knex");
const { development } = require("../knexfile");
const config = require("../knexfile");
const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment ]);


// jkadnlds
