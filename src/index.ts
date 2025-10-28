import express, { Request, Response } from "express";
import { join } from "path";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(join(__dirname, "../public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
