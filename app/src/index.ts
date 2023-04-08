// Libs
import express from "express";
import { readFileSync } from "fs";
import helmet from "helmet";
import { createServer } from "https";
import path from "path";

// Data
const app = express();
const PORT = 80;

// Code
app.use(helmet());

app.set("views", path.resolve("./src/public/pages/"));
app.set("view engine", "ejs");

const server = createServer(
  {
    key: readFileSync(path.resolve("./certs/server.key")),
    cert: readFileSync(path.resolve("./certs/server.crt")),
  },
  app
);

server.listen(PORT, () => console.log(`Server is online on port: ${PORT}`));
