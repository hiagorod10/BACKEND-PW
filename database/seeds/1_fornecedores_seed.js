
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("fornecedores").del()
    .then(function () {
      // Inserts seed entries
      return knex("fornecedores").insert([
        {nome:"Mobil" },
        {nome:"Ipiranga" },
        {nome:"Yamalube" },
        {nome:"Shell" },
        {nome:"Honda" },
        {nome:"Lubrax" },
        {nome:"Gulf" },
      ]);
    });
};
