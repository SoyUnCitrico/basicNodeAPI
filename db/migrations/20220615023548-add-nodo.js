'use strict';

const { UserSchema, USER_TABLE } = require('./../models/register.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'nodo', UserSchema.nodo)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'nodo'); 
  }
};
