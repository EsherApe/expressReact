const mongoose = require('../utils/mongoose'),
      Schema = mongoose.Schema;

const schema = new Schema({
    message: String,
    from: Schema.Types.ObjectId,
    to: [Schema.Types.ObjectId],
    isRead: {type: Boolean, default: false},
    date: {type: Date, default: Date.now}
});

exports.Inbox = mongoose.model('Inbox', schema);