const express = require('express');
require("./sqlConnect")

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Listen 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

const articles = require("./handelers/articles");
app.get("/articles", articles.getArticles);
app.post("/articles", articles.addArticles);