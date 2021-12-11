const knex = require("../database/connection");

const findAll = async (req, res) => {
  const fornecedores = await knex("fornecedores");
  res.json(fornecedores);
};
const findOne = async (req, res) => {
  const fornecedores = await knex("fornecedores").where({id:req.params.id});
  res.json(fornecedores);
};
const create = async (req, res) => {

  const fornecedores = await knex("fornecedores").insert(req.body);
  res.json(fornecedores);


};
const update = async function (req, res){
  const fornecedores = await knex("fornecedores")
    .where({ id: req.params.id })
    .update(req.body);
  res.json(fornecedores);
};
const destroy = async (req, res) => {
  const result = await knex("fornecedores").where({ id: req.params.id }).del();
  res.json(result);
};

module.exports = { findAll, findOne, create, update, destroy };