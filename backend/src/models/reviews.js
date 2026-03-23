/**
 Campos:
    idEmployees
    idProducts
    rating
    comment
 */

import mongoose, {Schema, model } from "mongoose";

const reviewSchema = new Schema({
    idEmployees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees"
    },
    idProducts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    rating: {
        type: Number,
    },
    comment: {
        type: String,
    },
}, {
    timestamps: true,
    strict: false
});

export default model("Reviews", reviewSchema)