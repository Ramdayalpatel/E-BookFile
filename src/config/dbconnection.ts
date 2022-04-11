import { Sequelize } from "sequelize"
import sequelize from 'sequelize'
require('pg').defaults.parseInt8 = true

import Umzug from 'umzug'
var path = require('path')

class Database {
    db: string
    user: string
    password: string
    host: string
    port: number
    database: sequelize.Sequelize


    constructor() {
        this.db = process.env.EBOOK_DB_NAME || 'NewData'
        this.user = process.env.DB_USER || 'postgres'
        this.password = process.env.DB_PASS || 'ramdayal@1986'
        this.host = process.env.DB_HOST || '127.0.0.1'
        this.port = Number(process.env.DB_PORT) || 5432


        this.database = new Sequelize(this.db, this.user, this.password, {
            host: this.host,
            dialect: 'postgres',
            logging: false,
            port: this.port
        })


        this.database
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully ')
                migrate.up()
                    .then((onFullfill: any) => {
                        console.log('All migrations performed successfully ')
                    }).catch((err: any) => {
                        console.log('Migration failed ( )');

                    })

            }).catch((err) => {
                console.error('Unable to connect to the database');
            })

    }
}

let databaseInstance = new Database().database


let migrate = new Umzug({
    // migrations: {
    //     path: path.join(__dirname, '../migrations/'),
    //     pattern: /\.json$/,
    //     params: [databaseInstance.getQueryInterface(), Sequelize],
    // },


    migrations: {
        params: [
            databaseInstance.getQueryInterface(),
            Sequelize // Sequelize constructor - the required module
        ],
        path: path.join(__dirname, '../migrations'),
        pattern: /\.json$/
    }

    ,

    storage: 'sequelize',
    storageOptions: {
        sequelize: databaseInstance,
    },
})

export default databaseInstance