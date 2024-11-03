import express from "express"
import dotenv from "dotenv"
import { route } from "./routes/index.js"
import cors from "cors";
dotenv.config({path: ".env"})

const app = express();
app.use(cors({
    origin: `http://localhost:${process.env.APP_PORT || 3000}`
}));

app.use(express.json());
app.use(route);

app.use((err, req, res, next) => {
    res.status(500).json({
        message: `Internal Server Error - ${err.message}`
    });
    next();
});

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});


