import express from "express";

const app = express();

app.set("view engine", "pug")
app.set("views", process.cwd() + "/example-pug/views")

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/profile", (req, res) => {
  const user = {
    nombre: "pablo",
    edad: "23",
    rol: "premium"
  }

  res.render("profile", user)
})

app.listen(8080, () => console.log('server up PUG'))