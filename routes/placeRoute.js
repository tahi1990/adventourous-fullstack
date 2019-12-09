const unirest = require('unirest');

module.exports = (app) => {

    const cors = require('cors');

    app.get(`/api/nearby/place`, cors(), async (req, res) => {

        const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
        Object.keys(req.query).forEach(key => url.searchParams.append(key, req.query[key]));

        unirest.get(url).end((response) => {
            if(response.statusCode === 200) {
                //make sure response should be a JSON object
                return res.status(200).send(response.body);
            }
        });

        return {};
    });

    app.get(`/api/details/place`, cors(), async (req, res) => {

        const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
        Object.keys(req.query).forEach(key => url.searchParams.append(key, req.query[key]));

        unirest.get(url).end((response) => {
            if(response.statusCode === 200) {
                //make sure response should be a JSON object
                return res.status(200).send(response.body);
            }
        });

        return {};
    });

};
