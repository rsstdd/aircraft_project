'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const ev = require('express-validation');
const validations = require('../validations/favorites');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;

    next();
  });
};

router.get('/favorites', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('favorites')
    .innerJoin('airplanes', 'airplanes.id', 'favorites.aircraft_id')
    .where('favorites.user_id', userId)
    .orderBy('airplanes.name', 'ASC')
    .then((rows) => {
      const favorites = camelizeKeys(rows);

      res.send(favorites);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/favorites/:id', authorize, (req, res, next) => {
  knex('favorites')
    .where('aircraft_id', req.query.aircraftId)
    .then((favorites) => res.send(favorites.length > 0))
    .catch((err) => {
      next(err);
    });
});

router.post('/favorites/', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;
  const { aircraftId } = req.body;

  const favorite = { aircraftId, userId };

  knex('airplanes')
   .where('id', aircraftId)
   .first()
   .then((row) => {
     if (!row) {
       return next(boom.create(404, 'Book not found'));
     }

     return knex('favorites')
      .insert(decamelizeKeys(favorite), '*')
      .then((rows) => {
        const insertFav = camelizeKeys(rows[0]);

        res.send(insertFav); // then give me what I just inserted into the DB
      })
      .catch((err) => {
        next(err);
      });
   })
    .catch((err) => {
      next(err);
    });
});

router.get('/favorites/check', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { bookId } = req.query;

  if (Number.isNaN(Number.parseInt(bookId))) {
    return next(boom.create(400, 'Book ID must be an integer'));
  }

  knex('favorites')
    .innerJoin('books', 'books.id', 'favorites.book_id')
    .where('favorites.user_id', userId)
    .where('books.id', bookId)
    .first()
    .then((row) => {
      if (!row) {
        return res.send(false);
      }

      res.send(true);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/favorites', authorize, ev(validations.delete), (req, res, next) => {
  let favorite;
  const  { aircraftId } = req.body;

  if (isNaN(Number.parseInt(aircraftId))) {
    return next(boom.create(400, 'Book ID must be an integer'));
  }

  knex('favorites')
   .where('aircraft_id', aircraftId)
   .first()
   .then((row) => {
     if (!row) {
       return next(boom.create(404, 'Favorite not found'));
     }

     favorite = row;

     return knex('favorites')
        .del()
        .where('aircraft_id', aircraftId);
   })
    .then(() => {
      delete favorite.id;
      const jsonFavorite = camelizeKeys(favorite);

      res.clearCookie('favorites');
      res.send(jsonFavorite);
    })
      .catch((err) => {
        next(err);
      });
});

module.exports = router;
