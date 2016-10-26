'use strict';

const express = require('express');
const boom = require('boom');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const ev = require('express-validation');
const validations = require('../validations/airplanes');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/aircraft', (_req, res, next) => {
  knex('airplanes')
    .orderBy('name')
    .then((rows) => {
      const airplane = camelizeKeys(rows);

      res.send(airplane);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/aircraft/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('airplanes')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const aircraft = camelizeKeys(row);

      res.send(aircraft);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/aircraft', ev(validations.post), (req, res, next) => {
  const { name, yearInService, countryOfOrigin, operators, maxSpeed, maxRange, ceiling, engines, imgUrl } = req.body;
  const insertPlane = { name, yearInService, countryOfOrigin, operators, maxSpeed, maxRange, ceiling, engines, imgUrl };

  knex('airplanes')
    .insert(decamelizeKeys(insertPlane), '*')
    .then((rows) => {
      const plane = camelizeKeys(rows[0]);

      res.send(plane);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/aircraft/:id', ev(validations.patch), (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('airplanes')
    .where('id', id)
    .first()
    .then((book) => {
      if (!book) {
        throw boom.create(404, 'Not Found');
      }

      const { name, yearInService, countryOfOrigin, operators, maxSpeed, maxRange, ceiling, engines, imgUrl } = req.body;
      const updateAircraft = {};

      // if (name || name.trim()) { // says the trim is better
      //   updateAircraft.name = name;
      // }
      // if (!isNaN(yearInService)) {
      //   updateAircraft.yearInService = yearInService;
      // }
      // if (countryOfOrigin) {
      //   updateAircraft.countryOfOrigin = countryOfOrigin;
      // }
      // if (operators || operators.trim()) {
      //   updateAircraft.operators = operators;
      // }
      // if (!isNaN(maxSpeed)) {
      //   updateAircraft.maxSpeed = maxSpeed;
      // }
      // if (!isNaN(ceiling)) {
      //   updateAircraft.maxRange = ceiling;
      // }
      // if (!isNaN(maxRange)) {
      //   updateAircraft.maxRange = maxRange;
      // }
      // if (engines || engines.trim()) {
      //   updateAircraft.maxSpeed = engines;
      // }
      // if (imgUrl || imgUrl.trim()) {
      //   updateAircraft.maxRange = imgUrl;
      // }

      return knex('airplanes')
        .update(decamelizeKeys(updateAircraft), '*')
        .where('id', req.params.id);
    })
    .then((rows) => {
      const book = camelizeKeys(rows[0]);

      res.send(book);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/airplanes/:id', (req, res, next) => {
  let book;
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(Number.parseInt(id))) {
    return next();
  }

  knex('airplanes')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      book = camelizeKeys(row);

      return knex('airplanes')
        .del()
        .where('id', id)
    })
    .then(() => {
      delete book.id;

      res.send(book);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
