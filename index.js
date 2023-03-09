import express from "express";
import bodyparser from "body-parser";
import * as dotenv from "dotenv";
import cors from "cors";
import pokemonRouter from "./routes/pokemon.js";

dotenv.config();

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173/",
    credentials: true,
  })
);
app.options("*", cors());

// Use the Pokemon router for all routes starting with /pokemon
app.use("/pokemon", pokemonRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
