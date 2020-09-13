const Tokens = require('../models/tokens');

class AuthController {
    static async generateToken(req, res, next) {
        try {
            const result = await Tokens.saveToken();
            res.status(200).json(result);
        } catch (e) {
            res.status(500).json({error: 'TOKEN SAVED FAILED'})
        }
    }

    static async deleteToken(req, res, next) {
        try {
            await Tokens.deleteToken(req.query.token).then( () =>
                {res.status(200).body({note: 'Token was removed form database'})}
            );
        } catch (e) {
            res.status(500).json({error: 'TOKEN DELETE FAILED'})
        }
    }
}

module.exports = AuthController;
