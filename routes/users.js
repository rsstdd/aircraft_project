'use strict';

const bcrypt = require('bcrypt-as-promised');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const ev = require('express-validation');
const validations = require('../validations/users');

const router = express.Router();

router.post('/users', ev(validations.post), (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  bcrypt.hash(password, 13)
    .then((hashedPassword) => {
      const insertUser = { firstName, lastName, email, hashedPassword };

      return knex('users')
        .insert(decamelizeKeys(insertUser), '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
