const express = require("express");
const app = express()
const env = require('dotenv')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const questions = require("./questions.json")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

env.config();
mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://sandeeptottadi:${process.env.Database_password}@cluster0.yc9wurs.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true})
const db = mongoose.connection;

db.once("open", () => {
    console.log("connected");
})

app.use(cors({
  origin: "*",
}));

app.get((req, res) => {
    res.send("Hello World!")
})

app.get("/questions", (req, res) => {
    res.json({
        questions
    })
})

app.listen(5000)