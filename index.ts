import fastify, { FastifyInstance } from "fastify";
import * as autoroutes from "fastify-autoroutes";

const app: FastifyInstance = fastify({ logger: true });

const startServer = async () => {
  await app.register(autoroutes.default, {
    dir: "./src/routes",
    prefix: "/api/v1", // -> optional
  });

  await app.listen(3000);
};

startServer();
