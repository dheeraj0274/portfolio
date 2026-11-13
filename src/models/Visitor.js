import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    visitorId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Visitor =
  mongoose.models.Visitor ||
  mongoose.model("Visitor", visitorSchema);

export default Visitor;