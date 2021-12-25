const express = require("express");
const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(port, () => {
  console.log(`Rodando em localhost:${port}`);
});
