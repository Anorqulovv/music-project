import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: String,
  album: String,
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Track", musicSchema);
