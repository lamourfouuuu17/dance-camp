const { Masterclass } = require("../models/models");
const ApiError = require("../errors/ApiError");

class MasterclassController {
  async create(req, res, next) {
    try {
      const { teacherName, teacherSurname, style, styleDesc, date } = req.body;
      const masterclass = await Masterclass.create({
        teacherName,
        teacherSurname,
        style,
        styleDesc,
        date,
      }); // извлекаем и создаем masterclass
      return res.json(masterclass);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const masterclasses = await Masterclass.findAll();
    return res.json(masterclasses);
  }

  //   async getOne(req, res) {
  //     const { id } = req.params;
  //     const masterclass = await Masterclass.findOne({
  //       where: { id },
  //       include: { as: "styleDesc" },
  //     });
  //     return res.json(masterclass);
  //   }
}

module.exports = new MasterclassController();
