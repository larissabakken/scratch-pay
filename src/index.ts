import express from "express";

const PORT = 3003;
const app = express();

app.get("/api", (req, res) => {
  res.send("I loke you more!");
});

app.use((req, res) => {
    res.status(404).send("I loke you");
});

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
