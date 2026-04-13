import express from "express";
import productRoutes from "./src/routes/products.js";
import branchesRoutes from "./src/routes/branches.js";
import employeesRoutes from "./src/routes/employees.js";
import customerRoutes from "./src/routes/customer.js";
import registerCustomerRoutes from "./src/routes/registercustomer.js";
import registerEmployeesRouter from "./src/routes/registerEmployees.js";
import registerAdminRouter from "./src/routes/adminregister.js"
import cookieParser from "cookie-parser";

//Creo una constante que guarde Express
const app = express();

app.use(cookieParser())



//Que acepte los json desde postman
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/registerEmployees", registerEmployeesRouter);
app.use("/api/customers", customerRoutes);
app.use("/api/registerCustomer", registerCustomerRoutes);
app.use("/api/registerAdmin", registerAdminRouter);

export default app;
