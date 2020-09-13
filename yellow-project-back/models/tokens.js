const db = require("./connection");
const {v4: uuidv4} = require('uuid');
const {DataTypes, Model} = require('sequelize');

class Tokens extends Model {

    static async saveToken() {
        const token = uuidv4();
        const expirationDate = this.getExpirationDate();
        try {
            return await Tokens.create({token, expirationDate})
        } catch (e) {
            console.error('Token not created', e)
        }
    }

    static async deleteToken(token) {
        try {
            await Tokens.destroy({where: {token}});
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

Tokens.init({
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: db.connection,
    modelName: 'tokens'
});

module.exports = Tokens;
