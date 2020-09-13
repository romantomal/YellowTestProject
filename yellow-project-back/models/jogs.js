const db = require("./connection");
const {DataTypes, Model} = require('sequelize');

class Jogs extends Model {

    static async getJogs(token) {
        try {
            return await Jogs.findAll({where: {tokenId: token}})
        } catch (e) {
            console.error('Token not created', e)
        }
    }

    static async addJog(jog) {
        console.log(jog)
        try {
            return await Jogs.create({tokenId: jog.token, distance: jog.distance, speed: jog.speed, time: jog.time, date: jog.date})
                .then(() => {
                    return Jogs.getJogs(jog.token);
                });
        } catch (e) {
            console.error('Token not deleted', e)
        }
    }

    static getExpirationDate() {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    }
}

Jogs.init({
    tokenId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.STRING,
        allowNull: false
    },
    speed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize: db.connection,
    modelName: 'jogs'
});

module.exports = Jogs;
