import express from "express";
// import dotenv from "dotenv";
import cors from "cors";

// dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json("server is up and running");
});

const arr = { 'name': 'Hima',
    'age': 24,
    'city': 'Hyderabad'
};

app.get("/getData", (req, res) => {
    res.status(200).json(arr);
});


app.listen(PORT, () => {
    console.log("Server is running...");
    console.log(`Visit: http://localhost:${PORT}/health`);
});


