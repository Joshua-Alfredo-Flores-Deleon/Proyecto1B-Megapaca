import express from "express"
import loginCUstomersController from "../controllers/loginCustomerController.js"

const router = express.Router();

router.route("/").post(loginCUstomersController.login);

export default router;