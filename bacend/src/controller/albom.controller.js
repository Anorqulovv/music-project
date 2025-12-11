import { catchAsync } from '../middleware/catch-async.js';
import Albom from '../schema/albom.schema.js';
import { ApiError } from '../utils/customer-error.js';
import { succesRes } from '../utils/succes-response.js';
import { BaseController } from './base.controller.js';

class AlbomController extends BaseController {
    create = catchAsync(async (req, res) => {
        const existAlbom = await Albom.findOne({ name: req.body?.name });
        if (existAlbom) {
            throw new ApiError('Albom name already exists', 409);
        }
        const albom = await Albom.create(req.body);
        return succesRes(res, albom, 201);
    })

    update = catchAsync(async (req, res) => {
        const id = req.params?.id;
        await this._getById(id);
        
        const { name } = req.body;
        
        if (name) {
            const existAlbom = await Albom.findOne({ name });
            if (existAlbom && existAlbom.id != id) {
                throw new ApiError('Albom name already exists', 409);
            }
        }

        const albom = await Albom.findByIdAndUpdate(id, req.body, { new: true });
        return succesRes(res, albom);
    })
}

const alboms = new AlbomController(Albom, "musics");

export default alboms;
