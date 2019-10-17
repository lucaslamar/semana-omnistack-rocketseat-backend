const Spot = require('../models/Spot')

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;
        const stops =  await Spot.find({ user: user_id });

        return res.json(stops);

    }
}