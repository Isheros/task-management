const {Schema, model} = require('mongoose');

const TaskSchema = new Schema ({
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
    //tags:{ 
    //    type: Schema.Types.ObjectId,
    //    ref: 'User'},
    //dueDate: Date,
    //reminders: [Date],
    author:{ 
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},{
    timestamps: true
});

module.exports = model('Task', TaskSchema);