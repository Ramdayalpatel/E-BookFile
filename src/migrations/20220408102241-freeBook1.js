'use strict';

export default {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('Migration is Runiing Successfully').then(async () => {
      await queryInterface.createTable('Free Books', {
        id: {
          type: sequelize.NUMBER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: sequelize.STRING,
          allowNull: false
        },
        last: {
          type: Sequelize.STRING
        }
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FreeBooks');
  }
}
