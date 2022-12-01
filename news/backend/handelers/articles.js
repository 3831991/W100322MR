import { con } from '../sqlConnect';
import path from 'path';
import fs from 'fs';

function saveImage(data, fileName) {
    let imgId = 0;

    con.query("INSERT INTO `images`(`name`) VALUES (?)", [fileName], (err, result) => {
        if (err) {
            throw err;
        }

        imgId = result.insertId;
        const exp = fileName.split('.').pop();

        const base64Data = data.replace(/^data:image\/[a-z]+;base64,/, "");

        fs.writeFile(__dirname + `/../files/${imgId}.${exp}`, base64Data, 'base64', (err) => {

        });
    });

    return imgId;
}

export async function getArticles(req, res) {
    con.query("SELECT * FROM `articles` ORDER BY `id` DESC", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

export async function getArticle(req, res) {
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

export async function addArticle(req, res) {
    const imgId = saveImage(req.body.image, req.body.imageName);

    con.query("INSERT INTO `articles`(`createdTime`, `userId`, `title`, `subTitle`, `body`, `imgId`, `publishTime`, `reporterId`, `categoryId`) VALUES (CURRENT_TIME,0,?,?,?,?,?,0,0)", [req.body.title, req.body.subTitle, req.body.body, imgId, req.body.publishTime], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

export async function updateArticle(req, res) {
    con.query("UPDATE `articles` SET `title`=?, `subTitle`=?, `body`=?, `imgId`=?, `publishTime`=?, `reporterId`=?, `categoryId`=? WHERE `id` = ?", [req.body.title, req.body.subTitle, req.body.body, req.body.imgId, req.body.publishTime, req.body.reporterId, req.body.categoryId, req.body.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

export async function uploadImage(req, res) {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No image uploaded'
            });
        } else {
            const image = req.files.image;
            image.mv(__dirname + "/../files/" + image.name);

            res.send({
                status: true,
                message: 'Image is uploaded',
                data: {
                    name: image.name,
                    mimetype: image.mimetype,
                    size: image.size
                }
            });
        }
    } catch (err) {
        res.sendStatus(500);
    }
}

export async function getImage(req, res) {
    res.sendFile(path.resolve(__dirname + "/../files/" + req.params.id + '.jpg'));
}

export async function deleteArticle(req, res) {
    con.query("DELETE FROM `articles` WHERE `id`=?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}