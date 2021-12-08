const service = require("./movies.service");

async function list(req, res, next) {
  const { is_showing } = req.query;
  const data = is_showing ? await service.listShowing() : await service.list();
  res.json({data});
}
async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie id not found: ${movieId}` });
}

function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

async function readTheaters(req, res) {
  const { movieId } = req.params;
  const data = await service.readTheaters(movieId);
  res.json({ data });
}

async function readReviews(req, res) {
  const { movieId } = req.params;
  const data = await service.readReviews(movieId);
  res.json({ data });
}


module.exports = {
  list,
  read: [movieExists, read],
  readTheaters: [movieExists, readTheaters],
  readReviews: [movieExists, readReviews],
}
