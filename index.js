import express from "express";
import bodyparser from "body-parser";
import * as dotenv from "dotenv";
import cors from "cors";
import pokemonRouter from "./routes/pokemon.js";

dotenv.config();

const app = express();

// Define allowed origins (Cleaned without trailing slashes)
const allowedOrigins = ["https://dynamic-dieffenbachia-57e9ac.netlify.app"];

// 1. CORS MUST BE FIRST to handle preflight (OPTIONS) requests correctly
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-to-server or tools like Postman/Curl (which have no origin header)
      if (!origin) return callback(null, true);

      // Strip trailing slash from incoming origin if it exists
      const cleanOrigin = origin.replace(/\/\$/, "");

      if (allowedOrigins.includes(cleanOrigin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// 2. Body parsers come after CORS
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// 3. Routes come last
app.use("/pokemon", pokemonRouter);

// Global Error Handler
// If your router crashes, this prevents Express from dropping CORS headers on the 500 error response
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
