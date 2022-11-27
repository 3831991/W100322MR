const con = require("../sqlConnect");

/** @type {import("express").RequestHandler} */
async function getArticles(req, res) {
    con.query("SELECT * FROM `articles`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

/** @type {import("express").RequestHandler} */
async function addArticles(req, res) {

}

module.exports = { getArticles, addArticles };