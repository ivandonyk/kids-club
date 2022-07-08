import express from "express";

// This is the API-Service that provides the job/order data
// Endpoints are as follows
// GET /list
// GET /job/:jobId
// GET /orders/:jobId

const createServer = function () {
  const app = express();

  app.use(express.static("public"));

  app.get("/list", (req, res) => {
    try {
      const result = [].map((job) => {
        const { orders, ...rest } = job;
        return rest;
      });
      return res.status(200).json(result);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/job/:jobId", async (req, res) => {
    try {
      const job = [].find((job) => job.job_id === +req.params.jobId);
      if (!job) return res.status(404).json(`No record found`);
      const { orders, ...rest } = job;
      return res.status(200).json(rest);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/orders/:jobId", async (req, res) => {
    try {
      const job = [].find((job) => job.job_id === +req.params.jobId);
      if (!job) return res.status(404).json(`No record found`);
      const { orders } = job;
      res.status(200).json(orders);
    } catch (error) {
      res.json(error);
    }
  });

  return app;
};

export default createServer;
