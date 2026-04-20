import express from "express"
import logoutController from "../controllers/logoutController.js"

//Utilizo Router()
const router = express.Router();

router.route("/").post(logoutController.logout);

export default router;