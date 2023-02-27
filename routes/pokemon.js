import { Router } from "express";
import {
  getAllPokemon,
  getPokemonById,
} from "../controllers/pokemonController.js";

const pokemonRouter = Router();

// Route to get the complete list of pokemon from the JSON
pokemonRouter.get("/", getAllPokemon);

// Route to get only one pokemon from the JSON thanks to its id
pokemonRouter.get("/:id", getPokemonById);

export default pokemonRouter;
