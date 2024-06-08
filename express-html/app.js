import express from 'express';

const app = express();

app.get("/", (req, res) => {
  const htmlSend = `<h1 style="color:red;">Hola a toda la comision de Coder!!</h1>`
  res.send(htmlSend)
})

app.listen(8080, () => console.log("listening"))