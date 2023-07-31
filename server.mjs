import { express } from "express";
import path from "path";



const port = process.env.PORT || 3000;
const app = express();
app.use(express.static (path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send ("Crud APP!");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
})