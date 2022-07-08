import express from "express";
import { jsonData } from "./games.data.js";

const createServer = function () {
  const app = express();

  app.use(express.static("public"));

  app.get("/members", (req, res) => {
    try {
      const membersArray = jsonData.map(({ member }) => member);
      const members = [...new Set(membersArray)];

      return res.status(200).json(members);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/games", (req, res) => {
    try {
      const membersArray = jsonData.map(({ member }) => member);
      const members = [...new Set(membersArray)];

      const games = members.map((member) => {
        const gamesCount = jsonData.filter(
          (data) => data.member === member
        ).length;

        return { member, count: gamesCount };
      });

      return res.status(200).json(games);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/member_games/:memberName", async (req, res) => {
    try {
      const gamesCounts = ["Chess", "Tennis", "Soccer"].map((game) => {
        const gameCount = jsonData.filter(
          (data) => data.member === req.params.memberName && data.game === game
        ).length;

        return [game, gameCount];
      });

      res.status(200).json(gamesCounts);
    } catch (error) {
      res.json(error);
    }
  });

  return app;
};

export default createServer;
