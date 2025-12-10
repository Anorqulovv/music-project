import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String},
  url: { type: String, required: true },
  albom: { ref: "Albom",type: mongoose.Schema.Types.ObjectId, required: true}
},{
  versionKey: false,
  timestamps: true
});

export default mongoose.model("Music", musicSchema);
