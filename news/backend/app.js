const express = require('express');
const cors = require('cors');
require("./sqlConnect")

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

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
app.get("/articles/image/:id", articles.getImage);