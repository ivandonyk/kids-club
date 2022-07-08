import CreateServer from "./create-server.js";

const PORT = 3050;

const ServerInstance = CreateServer();

ServerInstance.listen(PORT, async () => {
  console.log(`Local API listening at http://localhost:${PORT}`);
});
