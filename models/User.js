// /models/Product.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    id: String,
    image: String,
    wishlist: [{
        place: String,
        name: String,
        lat: String,
        lng: String,
        address: String,
        image: String
    }]
});

mongoose.model('users', userSchema);
