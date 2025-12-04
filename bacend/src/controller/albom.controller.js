import Albom from "../schema/albom.schema.js";
import { succesRes } from '../utils/succes-response.js';
import { errorRes } from '../utils/error-response.js';
import { ApiError } from '../utils/customer-error.js'


class AlbomCT{
  async create(req,res){
    try {
    const { title } = req.body;

    if (!title) throw new ApiError("name already exists",409)

    const albom = await Albom.create(req.body);
    return succesRes(res, albom, 201)
  } catch (error) {
    return errorRes(res, error)
  }
  }

  async getAllAlbom(_req,res){
    try {
      const alboms = await Albom.find().sort({ createdAt: -1 });
      return succesRes(res, alboms, 200)
    } catch (error) {
      return errorRes(res, error)
    }
  }

  async getAlbom(req,res){
    try {
      const albom = await Albom.findById(req.params.id);
      if (!albom) throw new ApiError("not found",409)
      return succesRes(res, albom, 200)
    } catch (error) {
      return errorRes(res, error);
    }
  }
}




export default new AlbomCT();