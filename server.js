import * as Hapi from "hapi";
import * as inert from "inert";

const init = async () => {
  const server = new Hapi.Server({
    host: "localhost",
    port: 3000,
  });

  await server.register(inert);

  server.route({
    method: "GET",
    path: "/",
    handler(request, h) {
      return h.file("./src/index.html");
    },
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
