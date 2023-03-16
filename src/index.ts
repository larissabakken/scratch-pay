import express from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";

const PORT = 3003;
const app = express();

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api", routes);

app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Start server
try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

export default app;
