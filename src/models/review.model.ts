import { Schema, model } from "mongoose";
import { Review } from "../interfaces/review.interface";

const ReviewSchema = new Schema<Review>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  calification: { type: Number, default: 4 },
  description: { type: String, required: true },
  costumer: { type: String, default: "Cliente Satisfecho" },
});

const ReviewModel = model("ReviewModel", ReviewSchema);

export default ReviewModel;
