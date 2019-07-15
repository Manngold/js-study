import app from "./app";

const PORT = 3000;

const handleListener = () => {
    console.log(`Server is online on http://localhost:${PORT}`);
};

app.listen(PORT, handleListener);
