const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
// if (req.query.name && req.query.age) {
//     const { name, age } = req.query;
//     res.send(`Hello ${name}(${age}), you are a Pawg! ºoºoº`);
//   } else if (req.query.name) {
//     res.send(`Hello FOCK ! ${req.query.name}`);
//   } else {
//     res.send("Hello World!");
//   }
// });

app.post("/api/forum/:name/:age/:height", (req, res) => {
  const { name, age, height } = req.params;
  res.send(`Hello ${name}(${age}), you are a Pawg! ºoºoº`);
  console.log(req.params);
  const dados = [];
  dados.push({
    name: name,
    age: age,
    height: height,
    data: new Date().toLocaleTimeString(),
  });
  res.send(dados);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
