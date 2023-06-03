const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//list all herbs
app.get("/herbs", async(req, res) => {
    try {
        const allHerbs = await pool.query("SELECT * FROM medicinalherbs")
        res.json(allHerbs.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//search for specific herb or disease

app.get("/herbs/:value", async(req, res) => {
    try {
        const { value } = req.params;

        const specificHerb = await pool.query(
            `
            SELECT * FROM medicinalherbs WHERE disease ILIKE '%' || $1 || '%'
            OR kikuyuname ILIKE '%' || $1 || '%'
            `,
            [value]
        );

        res.json(specificHerb.rows);
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})
