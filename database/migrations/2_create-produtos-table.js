
exports.up = function(knex) {
  

    return knex.schema.createTable("produtos", (table )=>{ 
        table.increments().primary();
        table.string("nome");
        table.string("descricao");
        table.string("imagem");
        table.decimal("preco", 10, 2);

        table.integer("fornecedores_id").references("fornecedores.id");
        table.timestamps(true, true)

     });
};

exports.down = function(knex) {
  
return knex.schema.dropTable("produtos");

};
