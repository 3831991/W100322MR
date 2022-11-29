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
async function getArticle(req, res) {
    con.query("SELECT * FROM `articles` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        if (!result.length) {
            res.sendStatus(404);
        }

        res.send(result[0]);
    });
}

/** @type {import("express").RequestHandler} */
async function addArticles(req, res) {

}

/** @type {import("express").RequestHandler} */
async function updateArticle(req, res) {
    con.query("UPDATE `articles` SET `title`=?, `subTitle`=?, `body`=?, `imgId`=?, `publishTime`=?, `reporterId`=?, `categoryId`=? WHERE `id` = ?", [req.body.title, req.body.subTitle, req.body.body, req.body.imgId, req.body.publishTime, req.body.reporterId, req.body.categoryId, req.body.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

/** @type {import("express").RequestHandler} */
async function getImage(req, res) {
    res.sendFile(path.resolve(__dirname + "/../files/" + req.params.id + '.jpg'));
}

module.exports = { getArticles, getArticle, addArticles, updateArticle, getImage };