
import express from "express";
import {middleware} from "./middleware/middleware.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

middleware(app);
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});