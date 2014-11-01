// app/models/scratchcode.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ScratchcodesSchema   = new Schema({
	code: String,
	available: Boolean
});

ScratchcodesSchema.statics.findByCode = function (code, callback) {
  this.findOne({ 'code': code}, callback);
}

ScratchcodesSchema.index({ code: 1 });

module.exports = mongoose.model('Scratchcode', ScratchcodesSchema);
