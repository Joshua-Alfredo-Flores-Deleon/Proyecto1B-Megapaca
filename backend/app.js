import express from "express";
import productRoutes from "./src/routes/products.js"; 
import branchesRoutes from "./src/routes/branches.js";
import employeeRoutes from "./src/routes/employees.js";
import reviewsRoutes from "./src/routes/reviews.js";
import customerController from "./src/controllers/customers.js";

//Creo una constante que guarde Express
const app = express();

//Que acepte los json desde postman
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/employess", employeeRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/customers", customerController);
app.use("/api/registerCustomers")

export default app;