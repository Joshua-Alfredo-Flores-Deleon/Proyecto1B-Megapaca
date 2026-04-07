import nodemailer from "nodemailer";
import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken"
import bcryptjs from "bcryptjs"

import customerModel from "../models/customers.js"

//Array de funciones
const registerCustomerController = {};

registerCustomerController.register = async (req, res) => {
    
    //#1- Solicitar los datos
    const {
            name,
            lastName,
            birthdate,
            email,
            password,
            isVerified
    } = req.body;

    try {
        
    } catch (error) {
        
    }

}