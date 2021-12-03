const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await service.list();
    res.json({data});
  }

// async function listShowing(req, res, next){ // any need for conditionals here?
//     const showings = await service.listShowing();
//     res.json({data});
// }


  module.exports = {
    list: asyncErrorBoundary(list)
    // listShowing: asyncErrorBoundary(listShowing),
  };
