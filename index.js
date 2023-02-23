import express from "express";
import pokemonRouter from "./routes/pokemon.js";

const app = express();

// Enable all CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Use the Pokemon router for all routes starting with /pokemon
app.use("/pokemon", pokemonRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
