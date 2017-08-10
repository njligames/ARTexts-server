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

  sessionId: {
    type: String
  },

  Created_date: {
    type: Date,
    default: Date.now
  },


});

var ARSessionSchema = new Schema({
  latitude: {
    type: Number
  },

  longitude: {
    type: Number
  },

  altitude: {
    type: Number
  },

  horizontalAccuracy: {
    type: Number
  },

  verticalAccuracy: {
    type: Number
  },

  course: {
    type: Number
  },

  speed: {
    type: Number
  },

  yaw: {
    type: Number
  },

  pitch: {
    type: Number
  },
  
  roll: {
    type: Number
  },

  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('ARText', ARTextSchema);
module.exports = mongoose.model('ARSession', ARSessionSchema);

