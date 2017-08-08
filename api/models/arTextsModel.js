'use strict';
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ARTextSchema = new Schema({
  transform: {
    type: String,
    Required: 'Kindly enter the transform of the Text'
  },

  text: {
    type: String,
    default: "some text"
  },

  Created_date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('ARText', ARTextSchema);

