const express = require("express");
const port = process.env.PORT || 3333;
const cors = require("cors");
const db = require("./config/_database");
const corsConfig = {
  origin: "http://localhost:8080",

  optionsSuccessStatus: 200,
};
const register = require("./routes/register");
const login = require("./routes/login");
const saveUrl = require("./routes/saveUrl");

// inicialização do serviço
const app = express();
db.connect();

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas
app.use("/register", register);
app.use("/login", login);
app.use("/save-url", saveUrl);

app.listen(port, () => {
  console.log(`Rodando em localhost:${port}`);
});
