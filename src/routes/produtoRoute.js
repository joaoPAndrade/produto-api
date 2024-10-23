import { resolveController } from "../adapters/resolveController.js";
import { Create } from "./controllers/createController.js";
import { Delete } from "./controllers/deleteController.js";
import { Update } from "./controllers/updateController.js";
import { GetAll } from "./controllers/getAllController.js";
import { GetById } from "./controllers/getByIDController.js";
import { ProdutoRepository } from "../repositories/produtoRepository.js";
import { Router } from "express";

export const Produto = Router();

const produtoRepository = new ProdutoRepository();
const produtoCreate = new Create(produtoRepository);
const produtoDelete = new Delete(produtoRepository);
const produtoUpdate = new Update(produtoRepository);
const produtoGetByID = new GetById(produtoRepository);
const produtoGetAll = new GetAll(produtoRepository);


Produto.post('/', resolveController(async (req, res) => {
    return await produtoCreate.handle(req, res);
}));

Produto.delete('/:id', resolveController(async (req, res) => {
    return await produtoDelete.handle(req, res);
}));

Produto.put('/:id', resolveController(async (req, res) => {
    return await produtoUpdate.handle(req, res);
}));

Produto.get('/:id', resolveController(async (req, res) => {
    return await produtoGetByID.handle(req, res);
}));

Produto.get('/', resolveController(async (req, res) => {
    return await produtoGetAll.handle(req, res);
}));