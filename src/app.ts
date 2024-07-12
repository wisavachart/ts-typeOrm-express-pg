import express, { Request, Response } from "express";
import "reflect-metadata";
import dataSource from "./datasouce/datasource";
import { User } from "./entities/User.entity";

const app = express();
const port = 8800;
dataSource
  .initialize()
  .then(() => {
    console.log("Connect Success");
  })
  .catch((e) => {
    console.log(`Database ${e}`);
  });

app.get("/", async (req: Request, res: Response) => {
  let userRpo = dataSource.getRepository(User);
  res.json(await userRpo.find());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
