import express from "express"
import employeeController from "../controllers/employees.js"

//Utilizo Router()
const router = express.Router();

router
.route("/")
.get(employeeController.getEmployee)
.post(employeeController.insertEmployees)


router
.route("/:id")
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)

export default router;