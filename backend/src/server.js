import express from "express";
import { ENV } from "./lib/env.js";
const app = express();
const PORT = ENV.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/heath", (req, res) =>
  res.status(200).json({ msg: "Api is up and running" })
);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
