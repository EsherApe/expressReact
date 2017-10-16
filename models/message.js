const mongoose = require('../utils/mongoose'),
    Schema = mongoose.Schema;

const schema = new Schema({
    from: String,
    to: String,
    datetime: {
        type: Date,
        default: new Date()
    },
    message: String,
    uid: Schema.Types.ObjectId
});