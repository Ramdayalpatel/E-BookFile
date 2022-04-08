"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require('pg').defaults.parseInt8 = true;
const umzug_1 = __importDefault(require("umzug"));
var path = require('path');
class Database {
    constructor() {
        this.db = process.env.EBOOK_DB_NAME || 'NewData';
        this.user = process.env.DB_USER || 'postgres';
        this.password = process.env.DB_PASS || 'ramdayal@1986';
        this.host = process.env.DB_HOST || '127.0.0.1';
        this.port = Number(process.env.DB_PORT) || 5432;
        this.database = new sequelize_1.Sequelize(this.db, this.user, this.password, {
            host: this.host,
            dialect: 'postgres',
            logging: false,
            port: this.port
        });
        this.database
            .authenticate()
            .then(() => {
            console.log('Connection has been established successfully ');
            migrate.up()
                .then((onFullfill) => {
                console.log('All migrations performed successfully ');
            }).catch((err) => {
                console.log('Migration failed ( )');
            });
        }).catch((err) => {
            console.error('Unable to connect to the database');
        });
    }
}
let databaseInstance = new Database().database;
let migrate = new umzug_1.default({
    migrations: {
        path: path.join(__dirname, '../migrations'),
        pattern: /\.json$/,
        params: [databaseInstance.getQueryInterface(), sequelize_1.Sequelize],
    },
    storage: 'sequelize',
    storageOptions: {
        sequelize: databaseInstance,
    },
});
exports.default = databaseInstance;
//# sourceMappingURL=dbconnection.js.map