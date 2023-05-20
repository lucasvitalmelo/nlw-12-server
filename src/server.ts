import "dotenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";

import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt";

const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: "luca-spacetime-2023-12-nlw",
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    host: "0.0.0.0",
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server running to http://localhost:3333");
  });
