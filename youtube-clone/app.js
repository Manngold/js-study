import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const home = (req, res) => {
    res.send("home");
};

const profile = (req, res) => {
    res.send("profile");
};

app.get("/", home);
app.get("/profile", profile);

export default app;
