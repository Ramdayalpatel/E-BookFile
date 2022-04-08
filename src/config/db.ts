// var { databaseInstance } = require('./db')
// var Umzug = require('umzug')
// var path = require('path')

// const migrate = new Umzug({
//     migrations: {
//         // indicates the folder containing the migration .js files
//         path: path.join(__dirname, '../migrations'),
//         pattern: /\.js$/,
//         // inject sequelize's QueryInterface in the migrations
//         params: [database.sequelize.getQueryInterface(), database.Sequelize],
//     },
//     // indicates that the migration data should be store in the database
//     // itself through sequelize. The default configuration creates a table
//     // named `SequelizeMeta`.
//     storage: 'sequelize',
//     storageOptions: {
//         sequelize: database.sequelize,
//     },
// })