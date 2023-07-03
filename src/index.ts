import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import indexRoutes from "./routers/index-routers";
import errorHandler from "./middlewares/errors-middleware";

dotenv.config();

const app = express();

app.use(express.json());
app.get("/health", (req, res) => res.send("Hello World"));
app.use(indexRoutes);
app.use(errorHandler)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server runs on ${PORT}`);
});