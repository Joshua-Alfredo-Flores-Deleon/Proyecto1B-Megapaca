import express from "express";
import productRoutes from "./src/routes/products.js";
import branchesRoutes from "./src/routes/branches.js";
import employeesRoutes from "./src/routes/employees.js";
import customerRoutes from "./src/routes/customer.js";
import registerCustomerRoutes from "./src/routes/registerCustomer.js";
import cookieParser from "cookie-parser";
import loginCustomerRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
import cors from "cors";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js";
import providerRoutes from "./src/routes/provider.js";
import limiter from "./src/middlewares/limiter.js";
import cartRoutes from "./src/routes/cart.js";
import wompiRoutes from "./src/routes/wompi.js";
import deliveryDriversRoutes from "./src/routes/deliveryDrivers.js";
import { validateAuthCookie } from "./src/middlewares/authMiddleware.js";
import adminRoutes from "./src/routes/admin.js";
import adminRegisterRoutes from "./src/routes/adminRegister.js";
import adminLogin from "./src/routes/adminLogin.js";
//Creo una constante que guarde Express
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    // permitir el envío de cookies y credenciales
    credentials: true,
  }),
);

app.use(limiter)

app.use(cookieParser());

//Que acepte los json desde postman
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/employees", validateAuthCookie(["Admin"]),employeesRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/registerCustomer", registerCustomerRoutes);
app.use("/api/loginCustomer", loginCustomerRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wompi", wompiRoutes);
app.use("/api/deliveryDrivers", deliveryDriversRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/registerAdmin", adminRegisterRoutes);
app.use("/api/loginAdmin", adminLogin);

export default app;
