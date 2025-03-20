const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');


// Permitir CORS
app.use(cors({
    origin: 'http://localhost:5173', // Permitir solo este origen
    methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type,Authorization' // Headers permitidos
}));

dotenv.config();        
app.use(express.json());

app.use("/api", require("./router/prestamoRouter"));
app.use("/api", require("./router/libroRouter"));
app.use("/api", require("./router/usuarioRouter"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});           