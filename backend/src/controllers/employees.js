//Creamos un array de funciones
const employeeController = {};

//Importo el Schema de la coleccion que voy a utilizar
import employeesModel from "../models/employess.js"

//SELECT
employeeController.getEmployee = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees);
}

//INSERT
employeeController.insertEmployees = async (req, res) => {
    //#1- Solicitpo los datos
    const {name, lastname, salary, DUI, phone, email, password, idBranches} = req.body;

    //#2- Llena mi modelo con los datos que acabo de pedir
    const newEmplpoyee = new employeesModel({name,
        lastname,
        salary,
        DUI, 
        phone,
        email, 
        password,
        idBranches});

        //#3- Guardo todo en la base de datos
        await newEmplpoyee.save();

        res.json({message: "Employee saved"})
}

//ELIMINAR
employeeController.deleteEmployee = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({message: "employee deeleted"})
};

//ACTUALIZAR
employeeController.updateEmployee = async (req, res) => {
    //#1- Solicito los nuevos datos
      const {name, lastname, salary, DUI, phone, email, password, idBranches} = req.body;
      //#2- actualizo los datos
      await employeesModel.findByIdAndUpdate(
        req.params.id,
        {
        name,
        lastname,
        salary,
        DUI, 
        phone,
        email, 
        password,
        idBranches
        },
        { new: true },
      );
    
      res.json({ message: "employee updated" });
};

export default employeeController;