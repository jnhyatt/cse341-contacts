import express from "express";
import cors from "cors";
import contactsRouter from "./routes/contacts.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "./docs/swagger.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default app;
