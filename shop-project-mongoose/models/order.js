const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    product: {
        title: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantitiy: {
            type: Number,
            required: true
        }
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    },
    total: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Order', orderSchema);