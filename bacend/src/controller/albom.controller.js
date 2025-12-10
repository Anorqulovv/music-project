import Albom from "../schema/albom.schema.js";
import { succesRes } from "../utils/succes-response.js";
import { ApiError } from "../utils/customer-error.js";

import { catchAsync } from '../middleware/catch-async.js'

class AlbomCT {

  create = catchAsync(async (req, res) =>{
    const { name } = req.body;

      const exist = await Albom.findOne({ name });
      if (exist) throw new ApiError("Albom name already exists", 409);

      const albom = await Albom.create(req.body);
      return succesRes(res, albom, 201);
  })

  getAll = catchAsync(async (req, res) =>{
    const alboms = await Albom.find()
        .sort({ createdAt: -1 })
        .populate("musics");

      return succesRes(res, alboms, 200);
  })

  get = catchAsync(async( req, res) =>{
    const albom = await Albom.findById(req.params.id).populate("musics");
      if (!albom) throw new ApiError("Albom not found", 404);

      return succesRes(res, albom, 200);
  }) 

  update = catchAsync(async(req, res) =>{
    const id = req.params.id;

      const albom = await Albom.findById(id);
      if (!albom) throw new ApiError("Albom not found", 404);

      if (req.body.name) {
        const existName = await Albom.findOne({ name: req.body.name, _id: { $ne: id } });
        if (existName) throw new ApiError("Albom name already taken", 409);
      }

      const updatedAlbom = await Albom.findByIdAndUpdate(id, req.body, { new: true })
        .populate("musics");

      return succesRes(res, updatedAlbom, 200);
  })

  remove = catchAsync(async(req, res) =>{
    const id = req.params.id;

      const albom = await Albom.findById(id);
      if (!albom) throw new ApiError("Albom not found", 404);

      await Albom.findByIdAndDelete(id);

      return succesRes(res, "Albom deleted successfully", 200);
  })
}

export default new AlbomCT();
