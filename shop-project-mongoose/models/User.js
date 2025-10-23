const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cart: {
        items: [
            {
                productId:{
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
});

module.exports = mongoose.model('User', userSchema);