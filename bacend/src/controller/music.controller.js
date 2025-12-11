import Music from "../schema/music.schema.js";
import { BaseController } from "./base.controller.js";

class MusicCT extends BaseController{

}

export default new MusicCT(Music, "albom");
