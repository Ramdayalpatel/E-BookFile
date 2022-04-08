'use strict';
import sequelize from "sequelize";
import { Sequelize } from "../models";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query('Migration is Runiing Successfully').then(async () => {
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

  down: async (query) => {
    await queryInterface.dropTable('Free Books')
  }
}




// async function up(queryInterface) {
//   /**
//    * Add altering commands here.
//    *
//    * Example:
//    */
//   await queryInterface.createTable('FreeBook', {
//     id: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   }, {
//     timestamps: true
//   });

// };

// async function down(queryInterface, Sequelize) {
//   /**
//    * Add reverting commands here.
//    *
//    * Example:
//    * await queryInterface.dropTable('users');
//    */
// }

// export default { up, down }