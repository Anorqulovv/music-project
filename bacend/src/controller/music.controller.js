import Music from "../schema/music.schema.js";
import { succesRes } from "../utils/succes-response.js";
import { ApiError } from "../utils/customer-error.js";
import { catchAsync } from '../middleware/catch-async.js'

class MusicCT {

  create = catchAsync(async(req, res) =>{
    const track = await Music.create(req.body);
    return succesRes(res, track, 201);
  })

  getAll = catchAsync(async(req,res) =>{
    const tracks = await Music.find()
        .sort({ createdAt: -1 })
        .populate("albom");

      return succesRes(res, tracks, 200);
  })

  get = catchAsync(async(req, res) =>{
    const track = await Music.findById(req.params.id).populate("albom");
      if (!track) throw new ApiError("Not found", 404);

      return succesRes(res, track, 200);
  })

  update = catchAsync(async(req, res) =>{
    const id = req.params.id;

      const track = await Music.findById(id);
      if (!track) throw new ApiError("Not found", 404);

      const updatedTrack = await Music.findByIdAndUpdate(id, req.body, { new: true });

      return succesRes(res, updatedTrack, 200);
  })

  remove = catchAsync(async(req, res) =>{
    const id = req.params.id;

      const track = await Music.findById(id);
      if (!track) throw new ApiError("Not found", 404);

      await Music.findByIdAndDelete(id);

      return succesRes(res, "Music deleted successfully", 200);
  })

}

export default new MusicCT();
