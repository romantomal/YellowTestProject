const Jogs = require('../models/jogs');

class JogsController {
    static async getJogs(req, res, next) {
        try {
            const result = await Jogs.getJogs(req.query.token);
            res.status(200).json(result);
        } catch (e) {
            res.status(500).json({error: 'TOKEN SAVED FAILED'})
        }
    }

    static async addJog(req, res, next) {
        try {
            await Jogs.addJog(req.body.params).then((result) => {
                console.log(result);
                res.status(200).json(result)
                }
            );
        } catch (e) {
            res.status(500).json({error: 'JOG ADD FAILED'})
        }
    }
}

module.exports = JogsController;
