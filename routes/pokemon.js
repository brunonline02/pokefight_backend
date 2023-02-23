import { Router } from "express";
import {
  getAllPokemon,
  getPokemonById,
  getPokemonInfoById,
} from "../controllers/pokemonController.js";

const pokemonRouter = Router();

// Route to get the complete list of pokemon from the JSON
pokemonRouter.get("/", getAllPokemon);

// Route to get only one pokemon from the JSON thanks to its id
pokemonRouter.get("/:id", getPokemonById);

// Route to get only one pokemon from the JSON thanks to its id and retrieve only one information (name or type or base) to send back to the client
pokemonRouter.get("/:id/:info", getPokemonInfoById);

export default pokemonRouter;
