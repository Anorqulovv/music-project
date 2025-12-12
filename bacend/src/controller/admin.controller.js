import User from '../schema/user.schema.js';
import { BaseController } from '../controller/base.controller.js';
import { ApiError } from '../utils/customer-error.js';
import { succesRes } from '../utils/succes-response.js';
import { catchAsync } from '../middleware/catch-async.js';

class AdminController extends BaseController{
    create = catchAsync(async (req, res) =>{
        const {userName, email} = req.body;
        await this._isExist(email, "Email");
        if(userName){
            await this._isExist(userName, "UserName");
        }
    });
}
