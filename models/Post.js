const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            max: 7000
        },
        img: {
            type: String
        },
        likes: {
            type: Array,
            default: []
        },
    },
    { timestamps: true }
);

module.exports = new mongoose.model("Post", postSchema);