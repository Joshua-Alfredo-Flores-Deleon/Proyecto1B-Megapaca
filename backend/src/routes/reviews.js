import express from "express";
import reviewsController from "../controllers/reviews.js"

//Utilizo Router () para definir los metodos (get, post, put, delete)
//Para mi endpoint

const router =  express.Router();

router
.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.insertReviews)

router
.route("/:id")
.put(reviewsController.updateReviews)
.delete(reviewsController.deleteReviews);

export default router;