var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DogSchema = new Schema({
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    dog_name: {
        type: String,
        required: true
    },

    dog_url: {
        type: String,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    activeness: {
        type: Number,
    },

    microchip: {
        type: Boolean,
    },

    social_children: {
        type: String,
        required: true
    },

    social_ppl: {
        type: String,
        required: true
    },

    social_dog: {
        type: String,
        required: true
    }
});

var dog = mongoose.model("Dog", DogSchema);

module.exports = dog;