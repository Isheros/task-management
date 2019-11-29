const {Schema, model} = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        trum: true,
        unique: true,
        required: true
    },
},{
    timestamps: true
});

module.exports = model('User', UserSchema);