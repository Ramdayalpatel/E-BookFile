'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query('Migration is Runiing Successfully').then(async () => {
            await queryInterface.createTable('Free Books', {
                id: {
                    type: Sequelize.BIGINT,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
            });
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FreeBooks');
    }
};
//# sourceMappingURL=20220408102241-freeBook1.js.map