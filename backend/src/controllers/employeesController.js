//Creamos un array de funciones
const employeeController = {};

//importo el Schema de la colección que voy a utilizar
import employeesModel from "../models/employees.js";

//SELECT
employeeController.getEmployees = async (req, res) => {
  const employees = await employeesModel.find();
  res.json(employees);
};

//ELIMINAR
employeeController.deleteEmployee = async (req, res) => {
  await employeesModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};

//ACTUALIZAR
employeeController.updateEmployee = async (req, res) => {
  //#1- Solicito los nuevos datos
  const { name, lastName, salary, DUI, phone, email, password, idBranches, isVerify } =
    req.body;
  //#2- Actualizo
  await employeesModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      lastName,
      salary,
      DUI,
      phone,
      email,
      password,
      idBranches,
      isVerify,
    },
    { new: true },
  );

  res.json({ message: "Employee updated" });
};

export default employeeController;
