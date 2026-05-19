import rateLimit from "express-rate-limit"

const limiter = rateLimit({
    windows: 5 * 60 *1000, //5 minutos
    max: 5, //Maximo de solicitudes HTTP
    message: {
        status: 429,
        error: "Too many Request"
    }
})

export default limiter