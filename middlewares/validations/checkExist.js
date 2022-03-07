const checkExist = (Model) => {
  return async (req, res, next) => {
    // kiem tra xem station co ton tai hay khong
      const {id} = req.params;
      const station = await Model.findOne({
          where: {
              id
          }
      });
      if(station) next();
      else
      res.status(404).send(`Khong tim thay id: ${id}`)
  }
}

module.exports = {
    checkExist
}