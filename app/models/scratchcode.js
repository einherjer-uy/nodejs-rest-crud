// app/models/scratchcode.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ScratchcodesSchema   = new Schema({
	code: String,
	available: {type:Boolean, default:true}
});

ScratchcodesSchema.statics.findByCode = function (code, callback) {
  this.findOne({ 'code': code}, callback);
}

ScratchcodesSchema.methods.consume = function (callback) {
  this.available = false;
}
ScratchcodesSchema.methods.reset = function (callback) {
  this.available = true;
}

ScratchcodesSchema.index({ code: 1 });

module.exports = mongoose.model('Scratchcode', ScratchcodesSchema);
