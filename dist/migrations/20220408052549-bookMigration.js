'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const models_1 = require("../models");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.sequelize.query('Migration is Runiing Successfully').then(async () => {
            await queryInterface.createTable('Free Books', {
                id: {
                    type: sequelize_1.default.BIGINT,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                name: {
                    type: sequelize_1.default.STRING,
                    allowNull: false
                },
                last: {
                    type: models_1.Sequelize.STRING
                }
            });
        });
    },
    down: async (query) => {
        await queryInterface.dropTable('Free Books');
    }
};
//# sourceMappingURL=20220408052549-bookMigration.js.map