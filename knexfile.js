'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/aircraft_project_dev'
  },

  test: {
    client: 'pg',
    connection: ''
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
