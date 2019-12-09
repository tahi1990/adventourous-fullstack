const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/User');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/adventourous`);

app.use(bodyParser.json());
app.use(cors());

//IMPORT ROUTES
require('./routes/userRoute')(app);
require('./routes/placeRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('adventourous/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'adventourous', 'build', 'index.html'))
    })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});
