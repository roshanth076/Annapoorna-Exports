import express from "express";
import path from "path";

const app = express();

const staticPath = path.resolve(process.cwd(), "dist", "public");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;