import { getArticles, getArticle, addArticle, updateArticle, getImage, deleteArticle } from './handelers/articles';
import express from 'express';
import cors from 'cors';
import './sqlConnect';

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json({ limit: '50mb' }));

app.listen(3000, () => {
    console.log('Listen 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get("/articles", getArticles);
app.get("/article/:id", getArticle);
app.get("/articles/image/:id", getImage);
app.post("/article", addArticle);
app.put("/article", updateArticle);
app.delete("/article/:id", deleteArticle);