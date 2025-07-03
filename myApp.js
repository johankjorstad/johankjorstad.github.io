import { dirname } from "path"; 
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const port = 5001;
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.get("/", (req,res) => {
    res.send("Hello")
})

app.post("/submit", (req,res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})