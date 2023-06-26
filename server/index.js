import { sql } from '@vercel/postgres';
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
var http=require('http');

app.use(cors());
app.use(express.json());

//list all herbs

app.get("/home", (req, res) => res.send('Home Page Route'));


app.get("/allHerbs", async(req, res) => {
    try {
        const allHerbs = await pool.query("SELECT * FROM medicinalherbs")
        res.json(allHerbs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//search for specific herb or disease

app.get("/herb", async(req, res) => {
    try {
        const { value } = req.query;

        const specificHerb = await pool.query(
            `
            SELECT * FROM medicinalherbs WHERE disease  || ' ' || kikuyuname ILIKE  $1 
            `,
            [`%${value}%`]
        );

        res.json(specificHerb.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Add comments to the userComments table
app.post("/comments", async(req, res) => {
    try {
        const { username, comment } = req.body;
        const newComment = await pool.query(
            `
            INSERT INTO userComments(username, comment)
            VALUES($1, $2)
            `
            ,[username, comment]
        );
        res.json(newComment)
    } catch (err) {
        console.error(err.message);
    }
});



const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
});