const express = require("express");
import { Request, Response } from "express";

const app = express();

app.get("/signup", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/signin", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/chat", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(3001);
