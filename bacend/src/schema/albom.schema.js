import mongoose from "mongoose";

const albomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Albom", albomSchema);