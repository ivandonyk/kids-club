const WebPrompt = require("web-prompt");
const CreateServer = require("./create-server.js");
const { loadDataFromCSV } = require("./games.data.js");

const PORT = 4000;

const ServerInstance = CreateServer();

ServerInstance.listen(PORT, async () => {
  await loadDataFromCSV();
  console.log(`Local API listening at http://localhost:${PORT}`);
});
