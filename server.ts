import { NextFunction, Request, Response } from "express";

import express from "express";
import cors from "cors";
import connectDB from "./db";
import routes from "./routes";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);

// Global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

connectDB();

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
