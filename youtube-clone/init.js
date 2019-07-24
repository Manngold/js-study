import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 3000;

const handleListener = () => {
    console.log(`Server is online on http://localhost:${PORT}`);
};

app.listen(PORT, handleListener);
