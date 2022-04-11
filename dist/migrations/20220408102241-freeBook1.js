'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
            });
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FreeBooks');
    }
};
//# sourceMappingURL=20220408102241-freeBook1.js.map