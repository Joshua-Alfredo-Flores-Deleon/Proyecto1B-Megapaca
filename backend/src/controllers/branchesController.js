//Creo unarray de funciones
const branchesController = {};
//Importo la coleccion que voy a utilizar
import branchesModel from "../models/branches.js"

//SELECT
branchesController.getbranches = async (req, res) => {
    const branches = await branchesModel.find();
    res.json(branches)
};

//INSERT 
branchesController.insertBranches = async (req, res) => {
    //#1- Solicito los datis a guardar
    const {name, address, schedule, isActive} = req.body;

    //#2- Lleno el modelo de estos datos
    const newBranch = new branchesModel({name, address, schedule, isActive})

    //#3- Guardar todo en la base de datos
    await newBranch.save();

    res.json({message: "Branch saved"})
};

//DELETE
branchesController.deleteBranches = async (req, res) => {
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Branch deleted"})
}

//UPDATE
branchesController.updateBranches = async (req, res) => {
    //#1- Solicito los nuevos datos
    const { name, address, schedule, isActive} = req.body;

    //#2- Actualizo
    await branchesModel.findByIdAndUpdate(req.params.id, {
        name,
        address,
        schedule,
        isActive,
    },
     {new: true},
  );
    res.json({message: "Branch updated"})
}

export default branchesController;