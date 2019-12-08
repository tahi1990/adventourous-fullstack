// /routes/userRoute.js
const mongoose = require('mongoose');
const cors = require('cors');
const User = mongoose.model('users');

module.exports = (app) => {

    app.use(cors());

    app.get(`/api/user`, cors(), async (req, res) => {
        let users = await User.find();
        return res.status(200).send(users);
    });

    app.get(`/api/user/:id`, cors(), async (req, res) => {
        const {id} = req.params;
        let user = await User.findOne({id: id});

        return res.status(200).send({
            error: false,
            user
        });
    });

    app.post(`/api/user`, cors(), async (req, res) => {
        let user = await User.create(req.body);
        return res.status(201).send({
            error: false,
            user
        })
    });

    app.put(`/api/user/:id`, cors(), async (req, res) => {
        const {id} = req.params;

        let user = await User.findOneAndUpdate({id: id}, req.body);

        return res.status(202).send({
            error: false,
            user: req.body
        });

    });

};
