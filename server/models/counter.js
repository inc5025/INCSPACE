var mongoose = require("mongoose");

var counterSchema = new mongoose.Schema({
    _id: String,
    value: {type: Number, default: 0}
});

counterSchema.statics.increment = function (counter, callback) {
    return this.findByIdAndUpdate(counter, { $inc: { value: 1 } }, {new: true, upsert: true, select: {value: 1}}, callback);
};

module.exports = mongoose.model('counter', counterSchema);