import Music from "../schema/music.schema.js";

class MusicCT{
  async createMusic(req,res){
    try {
    const { title, artist, album, genre, url } = req.body;

    if (!url) return res.status(400).json({ message: "Music URL required" });

    const track = await Music.create({
      title,
      artist,
      album,
      genre,
      url
    });

    res.json({ message: "Track saved", track });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  }

  async getAllMusic(req,res){
    try {
      const tracks = await Music.find().sort({ createdAt: -1 });
      res.json(tracks);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getMusic(req,res){
    try {
      const track = await Music.findById(req.params.id);
      if (!track) return res.status(404).json({ message: "Not found" });
      res.json(track);
    } catch (error) {
      console.log(error.message);
    }
  }
}


export default new MusicCT();
