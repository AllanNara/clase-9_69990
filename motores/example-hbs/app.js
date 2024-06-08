import path from "path";
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import express from "express";
import exhbs from "express-handlebars";

const app = express();

app.engine("handlebars", exhbs.engine());
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("")
})

app.get("/profile", (req, res) => {
  const user = {
    nombre: "Allan",
    edad: "25",
    rol: "profesor"
  }

  res.render("profile", user)
})

app.listen(8080, () => console.log('server up HANDLEBARS'))