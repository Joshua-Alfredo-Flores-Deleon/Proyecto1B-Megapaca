//Creo un array de funciones
const reviewsController = {};
//Importo la coleccion que voy a utilizar
import reviewsModel from "../models/reviews.js"

//SELECT
reviewsController.getReviews = async (req, res) => {
    const reviews = await reviewsModel.find();
    res.json(reviews)
};

//INSERT
reviewsController.insertReviews = async (req, res) => {
        //#1- Solicito los datis a guardar
        const {idEmployees, idProducts, rating, comment} = req.body;
    
        //#2- Lleno el modelo de estos datos
        const newReview = new reviewsModel({idEmployees, idProducts, rating, comment})
    
        //#3- Guardar todo en la base de datos
        await newReview.save();
    
        res.json({message: "Review saved"})
}

//DELETE
reviewsController.deleteReviews = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"})
}

//UPDATE
reviewsController.updateReviews = async (req, res) => {
    //#1- Solicito los nuevos datos
    const { idEmployees, idProducts, rating, comment} = req.body;

    //#2- Actualizo
    await reviewsModel.findByIdAndUpdate(req.params.id, {
        idEmployees,
        idProducts,
        rating,
        comment
    },
     {new: true},
  );
    res.json({message: "Review updated"})
}

export default reviewsController;