const knex = require("../database/connection");

const findAll = async (req, res) => {
  const produtos = await knex("produtos");
  const result = produtos.map((produto) => {
    produto.imagem = process.env.HOST + "/" + produto.imagem;
    return produto;
  });
  res.json(result);
};
const findOne = async (req, res) => {
  const produtos = await knex("produtos").where({ id: req.params.id });
  res.json(produtos);
};
const create = async (req, res) => {
 
  
  const produtos = await knex("produtos").insert(req.body);
  res.json(produtos);
  
};
const update = async function (req, res) {
  const produtos = await knex("produtos")
    .where({ id: req.params.id })
    .update(req.body);
  res.json(produtos);
};
const destroy = async (req, res) => {
  const produtos = await knex("produtos").where({ id: req.params.id }).del();
  res.json(produtos);
};

module.exports = { findAll, findOne, create, update, destroy };