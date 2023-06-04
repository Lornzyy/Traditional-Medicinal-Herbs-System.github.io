const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//list all herbs
app.get("/allHerbs", async(req, res) => {
    try {
        const allHerbs = await pool.query("SELECT * FROM medicinalherbs")
        res.json(allHerbs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//search for specific herb or disease

app.get("/herbs", async(req, res) => {
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

//Add users to the dbusers
app.post("/users", async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await pool.query(
            `
            INSERT INTO dbusers(username, email, password)
            VALUES($1, $2, $3)
            `
            ,[username, email, password]
        );
        res.json(newUser)
    } catch (err) {
        console.error(err.message);
    }
});

//Retrieve all users from the dbusers
app.get("/users", async(req, res) => {
    try {

        const allUsers = await pool.query(
            " SELECT * FROM dbusers "
        );

        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});








app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})
