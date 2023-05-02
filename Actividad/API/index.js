const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Legion501_66",
    database: "api2"
});

// Manejadores de solicitudes para la API
app.get("/productos", async (req, res) => {
    try {
        const [rows, fields] = await connection.query("SELECT * FROM productos");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
});

app.get("/productos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const [rows, fields] = await connection.query("SELECT * FROM productos WHERE id = ?", [id]);
        if (rows.length === 0) {
            res.status(404).json({ error: "Producto no encontrado" });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
});

app.post("/productos", async (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    try {
        const [result, fields] = await connection.query(
            "INSERT INTO productos (nombre, precio, descripcion) VALUES (?, ?, ?)",
            [nombre, precio, descripcion]
        );
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el producto" });
    }
});

app.put("/productos/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    try {
        const [result, fields] = await connection.query(
            "UPDATE productos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?",
            [nombre, precio, descripcion, id]
        );
        if (result.affectedRows === 0) {
            res.status(404).json({ error: "Producto no encontrado" });
        } else {
            res.json({ success: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
});

app.delete("/productos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const [result, fields] = await connection.query(
            "DELETE FROM productos WHERE id = ?",
            [id]
        );
        }
});

