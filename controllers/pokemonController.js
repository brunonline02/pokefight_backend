import pokedex from "../pokedex.json" assert { type: "json" };

export const getAllPokemon = (req, res) => {
  res.json(pokedex);
};

export const getPokemonById = (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex.filter((p) => p.id == id);

  if (pokemon.length === 0) {
    return res.status(404).json({ message: "Pokemon not found" });
  }

  res.json(pokemon[0]);
};

export const getPokemonInfoById = (req, res) => {
  const id = req.params.id;
  const info = req.params.info;

  const allowedInfo = ["name", "type", "base"];

  if (!allowedInfo.includes(info)) {
    return res.status(400).json({ message: "Invalid info parameter" });
  }

  const pokemon = pokedex.filter((p) => p.id == id);

  if (pokemon.length === 0) {
    return res.status(404).json({ message: "Pokemon not found" });
  }

  res.json(pokemon[0][info]);
};
