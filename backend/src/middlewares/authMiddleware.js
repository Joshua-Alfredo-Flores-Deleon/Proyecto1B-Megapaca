//Este middleware lo que hara sera:
//1- Accede a las cookies
//2- Mira que valor hay dentro de esa cookie
//3- Si el valor de la cookie conincide con la proteccion  que escribimos en l endpoint o metodo HTTP entonces lo deja pasar si no no

import jsonwebtoken from "jsonwebtoken";
import {config} from "../../config.js";

export const validateAuthCookie = (allowedTypes =[]) => {

    return (req, res, next) => {
        try {
            //Extraer el token que esta en la cookie (authCookie) ya que en esa cookie esta el tipo d usuario guardado
            const {authCookie} = req.cookies;

            if(!authCookie){
                return res.status(403).json({message: "Cookie not found, Autorization require"})
            }

            //Extraer toda la informacion de la cookie
            const decoded = jsonwebtoken.verify(authCookie, config.JWT.secret)

            //Verificar si el rol que tiene la cookie puede pasar o no
            if(!allowedTypes.includes(decoded.userType)){
                return res.status(401).json({message: "Access denied"})
            }

            next();

        } catch (error) {
            console.log("error"+error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }

}