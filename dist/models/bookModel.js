"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const dbconnection_1 = __importDefault(require("../config/dbconnection"));
let databaseInstance = dbconnection_1.default;
// export interface BookInstance extends sequelize.Instance<FreeBook>, FreeBook {
//     id: number,
//     name: string
// }
// const attribute: sequelize.DefineModelAttributes<FreeBook> = {
//     id: {
//         type: sequelize.NUMBER,
//         allowNull: false,
//         autoIncrement: true
//     },
//     name: {
//         type: sequelize.STRING,
//         allowNull: false,
//     }
// }
// sequelize Model 
exports.bookModel = databaseInstance.define('FreeBook', 
// attribute, {
// timestamps: true,
{
    id: {
        type: sequelize_1.default.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    last: {
        type: sequelize_1.default.STRING
    }
}, {
    timestamps: true
});
//# sourceMappingURL=bookModel.js.map