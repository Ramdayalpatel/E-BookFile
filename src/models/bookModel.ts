import sequelize from "sequelize"
import database from "../config/dbconnection";
let databaseInstance = database



export interface FreeBook {
    id: number,
    name: string,
    last: string
}
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
export let bookModel = databaseInstance.define(
    'FreeBook',

    // attribute, {

    // timestamps: true,

    {
        id: {
            type: sequelize.NUMBER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        last: {
            type: sequelize.STRING
        }

    }, {
    timestamps: true
}


);
