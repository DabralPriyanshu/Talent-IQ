import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
const app = express();
const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/heath", (req, res) =>
  res.status(200).json({ msg: "Api is up and running" })
);
app.get("/book", (req, res) => res.status(200).json({ msg: "Book routes" }));
//make ready for deployment
if (ENV.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
