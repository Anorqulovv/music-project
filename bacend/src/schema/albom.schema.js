import mongoose from "mongoose";

const albomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String},
},{
  versionKey: false,
  timestamps: true,
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});


albomSchema.virtual('musics',{
  ref: 'Music',
  localField: '_id',
  foreignField: 'albom'
})


export default mongoose.model("Albom", albomSchema);