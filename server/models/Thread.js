const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    pname: {
        type: String
    },
    pvalue: {
        type: String
    },
    cname: {
        type: String
    },
    cemailid: {
        type: String
    }
});

const Thread = mongoose.model('threads', ThreadSchema);

module.exports = Thread;