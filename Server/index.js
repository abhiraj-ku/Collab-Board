import express from "express";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.listen(3000, () => {
  console.log(`server is up and running at port 3000`);
});
