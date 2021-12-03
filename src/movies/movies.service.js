const knex = require("../db/connection");

function list() {
    return knex("movies")
        .select("*")
        .where({ movie_id })
        .first();
}

//join movies to movies_theaters at foreign key- where column is_showing = true
// function listShowing() {
//     return knex("movies as m")
//         .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
//         .where({"mt.is_showing": true})
//         .groupBy("m.movie_id")
//     }


    module.exports = {
        list
        // listShowing,
      };
