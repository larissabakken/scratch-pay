import express from "express";
import routes from "./routes";

const PORT = 3003;
const app = express();

app.use("/api", routes);

app.use((req, res) => {
    res.status(404).send("Not Found");
});

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
