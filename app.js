import express from "express";

const app = express();

const PORT = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/view/home.html`);
});

app.get("/request", (req, res) => {
  res.sendFile(`${import.meta.dirname}/view/thank-you.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
