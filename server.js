const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();        
app.use(express.json());

app.use("/api", require("./router/prestamoRouter"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});           