var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookingSchema = new Schema({

    dog_id: {
        type: Schema.Types.ObjectId,
        ref: "Dogs",
        required: true
    },

    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    borrower_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    booking_date:{
        type: Date,
        required: true
    }
});

var booking = mongoose.model("Booking", BookingSchema);

module.exports = booking;