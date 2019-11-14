const {Schema, model} = require('mongoose');

new Schema ({
    title: {
        type: String,
        required: true
    },
    description: String,
    priority: {
        type: String,
        enum : ['Ninguna', 'Baja', 'Media', 'Alta'],
        default: 'Ninguna'
    },
    completed:{
        type: Boolean,
        default: false
    },
    tags:[TagSchema],
    dueDate: Date,
    reminders: [Date],
    author: UserSchema,
},{
    timestamps: true
})