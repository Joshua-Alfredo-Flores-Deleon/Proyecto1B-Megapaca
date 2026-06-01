import express from "express"
import deliveryDrivers from "../controllers/deliveryDriversController.js"
import upload from "../utils/cloudinaryConfig.js"

const router = express.Router()

router.route("/")
.get(deliveryDrivers.getAllDrivers)
.post(upload.single("image"), deliveryDrivers.insertDrivers)

router.route("/:id")
.put(upload.single("image"), deliveryDrivers.updateDrivers)
.delete(deliveryDrivers.deleteDrivers)

export default router; 