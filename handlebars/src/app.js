import express from "express";
import exhbs from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";

const app = express();
const users = [];

app.engine("handlebars", exhbs.engine());
app.set("view engine", "handlebars");

// ENNOT -> EL ARCHIVO NO EXISTE ( por lo general esta mal configurada la ruta)
app.set("views", path.join(__dirname, "../views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("user", { nombre: "gustavo" });
});

app.get("/guest", (req, res) => {
	res.render("invitado", { nombre: "juan" });
});

app.get("/users-list", (req, res) => {
	res.render("users", { users, length: !!users.length });
});

app.get("/form-user", (req, res) => {
	res.render("form");
});

app.post("/users", (req, res) => {
	const { name, email } = req.body;
	users.push({ name, email });
	res.send("Agregado");
});

app.listen(8080, () => console.log(`listening`));








/*
 RESPONDE EN FORMATO JSON:
	api/products
	api/cart
	api/message

 RESPONDE CON VISTAS
	/products
	/message

*/