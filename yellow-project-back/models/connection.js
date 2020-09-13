const Sequelize = require('sequelize');

class Database {
    connection = new Sequelize({
        dialect: 'mysql',
        database: 'yellow_db',
        username: 'root',
        host: 'localhost',
        port: '3306',
        password: 'root',
        logging: true,
    });

    async connect() {
        try {
            await this.connection.sync();
            console.log("DB IS SYNCHRONISED")
        } catch(error) {
            console.error(error, "DB IS NOT CONNECTED")
        }
    }
}


module.exports = new Database();
