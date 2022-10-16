const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");

const db = require("./config/db");

const app = express();

const indexRouter = require("./src/api");

// Connect to database
db.connectDB();

app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
    })
);

app.use(logger("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json("Something broke!");
});

app.use("*", (req, res) => {
    res.status(404).json({ error: "not found" });
});

module.exports = app;
