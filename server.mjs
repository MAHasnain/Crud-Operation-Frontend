import express from "express";
import path from "path";


const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static (path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send ("Crud APP!");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
})