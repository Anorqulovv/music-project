import { isValidObjectId } from "mongoose";

import { catchAsync } from "../middleware/catch-async.js";
import { ApiError } from "../utils/customer-error.js";
import { succesRes } from "../utils/succes-response.js";

export class BaseController {
    constructor(model, relation) {
        this.model = model;
        this.relation = relation;
    }

    create = catchAsync(async (req, res) => {
        const data = await this.model.create(req.body);
        return succesRes(res, data, 201);
    });

    getAll = catchAsync(async (_req, res) => {
        const data = await this.model.find().populate(this.relation);
        return succesRes(res, data);
    });

    get = catchAsync(async (req, res) => {
        const data = await this._getById(req.params?.id);
        return succesRes(res, data);
    });

    update = catchAsync(async (req, res) => {
        const id = req.params?.id;
        await this._getById(id);

        const updatedData = await this.model.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        return succesRes(res, updatedData);
    });

    remove = catchAsync(async (req, res) => {
        const id = req.params?.id;
        await this._getById(id);

        await this.model.findByIdAndDelete(id);
        return succesRes(res, {});
    });

    async _getById(id) {
        
        if (!isValidObjectId(id)) {
            throw new ApiError("Invalid Object ID", 400);
        }
        
        const data = await this.model
            .findById(id)
            .populate(this.relation);
        
        if (!data) {
            throw new ApiError("Not found", 404);
        }

        


        return data;
    }
}
