const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name1: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        number: {
            type: String,
            trim: true,
            required: true,
            
            unique: true
        },
        about: {
            type: String,
            trim: true,
            required: true,
            
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
