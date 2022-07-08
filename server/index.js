import CreateServer from "./create-server.js";
import { loadDataFromCSV } from "./games.data.js";

const PORT = 4000;

const ServerInstance = CreateServer();

ServerInstance.listen(PORT, async () => {
  await loadDataFromCSV();
  console.log(`Local API listening at http://localhost:${PORT}`);
});
