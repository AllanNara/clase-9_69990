import express from "express";

const app = express();

app.set("view engine", "ejs")
app.set("views", process.cwd() + "/example-ejs/views")

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.get("/profile", (req, res) => {
  const user = {
    nombre: "pablo",
    edad: "23",
    rol: "premium"
  }

  res.render("profile", user)
})

app.listen(8080, () => console.log('server up EJS '))