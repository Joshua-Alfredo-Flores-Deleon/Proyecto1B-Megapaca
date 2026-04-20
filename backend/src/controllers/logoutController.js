const logoutController = {};

logoutController.logout = async (req, res) => {
    //Limpiar la cookie que tiene la informacion
    //De quien inicio sesión
    res.clearCookie("authCookie")

    return res.status(200).json({message: "Sesion cerrada"})
}

export default logoutController;