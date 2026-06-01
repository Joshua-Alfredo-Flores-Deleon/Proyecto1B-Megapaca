import deliveryDriversModel from "../models/deliveryDrivers.js";

import {v2 as cloudinary} from "cloudinary"
import recoveryPasswordController from "./recoveryPasswordController.js";

//Array de funciones
const deliveryDrivers = {}

//SELECT 
deliveryDrivers.getAllDrivers = async (req, res) => {
    try {
        const drivers = await deliveryDriversModel.find()
        return res.status(200).json(drivers)
    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//INSERT
deliveryDrivers.insertDrivers = async (req, res) => {
    try {
        
        const {name, phone, cars, isActive} = req.body;

        const newDriver = new deliveryDriversModel({
            name,
            phone,
            image: req.file.path,
            public_id: req.file.filename,
            cars,
            isActive
        })

        await newDriver.save()

        return res.status(200).json({message: "Delivery Driver Saved"})

    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//ELIMINAR
deliveryDrivers.deleteDrivers = async (req, res) => {
    try {
        const driverFound = await deliveryDriversModel.findById(req.params.id)

        await cloudinary.uploader.destroy(driverFound.public_id)

        const driverDeleted = await deliveryDriversModel.findByIdAndDelete(req.params.id)

        if(!driverDeleted){
            return res.status(404).json({message: "Driver not found"})
        }

        return res.status(200).json({message: "Driver deleted"})

    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//UPDATE
deliveryDrivers.updateDrivers = async (req, res) => {
    try {
        
        const {name, phone, cars, isActive} = req.body;

        const driverFound = await deliveryDriversModel.findById(req.params.id)

        const updatedData = {
            name, phone, cars, isActive
        }

        if(req.file){
            await cloudinary.uploader.destroy(driverFound.public_id)

            updatedData.image = req.file.path
            updatedData.public_id = req.file.filename
        }

        await deliveryDriversModel.findByIdAndUpdate(
            req.params.id,
            updatedData,
            {new:true}
        )

        return res.status(200).json({message:"Driver Updated"})

    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default deliveryDrivers;