// app/models/Mednode.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NodeSchema   = new Schema({
    Temp: String,
    Hum: String,
    HumT: String,
    Pres: String,
    date: Date
});

module.exports = mongoose.model('posts', NodeSchema);