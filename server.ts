import { Response } from "express";

// Loads the configuration from config.env to process.env
require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const db = require('./db');
import routes from './routes';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

// Global error handling
app.use(function (err: any, _req: Request, res: Response) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
