import express from "express";
import { Produto } from "./produtoRoute.js";
export const route = express.Router();



route.use('/', Produto);