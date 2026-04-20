import express from "express";
import productRoutes from "./src/routes/products.js";
import branchesRoutes from "./src/routes/branches.js";
import employeesRoutes from "./src/routes/employees.js";
import customerRoutes from "./src/routes/customer.js";
import registerCustomerRoutes from "./src/routes/registercustomer.js";
import registerEmployeesRouter from "./src/routes/registerEmployees.js";
import registerAdminRouter from "./src/routes/adminregister.js";
import loginCUstomersRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import cookieParser from "cookie-parser";
import cors from "cors";

//Creo una constante que guarde Express
const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],

    //permitir el envio de cookies y credenciales
    credentials: true,
}))

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
app.use("/api/login", loginCUstomersRoute);
app.use("/api/logout", logoutRoute);

export default app;
