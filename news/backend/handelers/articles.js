const con = require("../sqlConnect");
const path = require('path');

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

/** @type {import("express").RequestHandler} */
async function getImage(req, res) {
    res.sendFile(path.resolve(__dirname + "/../files/" + req.params.id + '.jpg'));
}

module.exports = { getArticles, addArticles, getImage };