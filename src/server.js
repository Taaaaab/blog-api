const express = require("express");
require("dotenv").config();
const cors = require("cors");
const postRouter = require("./routes/posts");
const apiRouter = require("./routes/api");
var path = require("path");
const compression = require("compression");
// Import the mongoose module
const mongoose = require("mongoose");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());
app.use(compression()); // Compress all routes

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);
// Define the database URL to connect to.
const mongoDB = process.env.MONGODB_URL;

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// * Routes * //

app.use("/", postRouter);
app.use("/posts", postRouter);
app.use("/api", apiRouter);

// * Start * //

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
