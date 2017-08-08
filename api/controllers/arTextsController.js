'use strict';

var mongoose = require('mongoose'),
    ARText = mongoose.model('ARText');

exports.list_all_texts = function(req, res) {
  ARText.find({}, function(err, text) {
    if(err)
      res.send(err);
    res.json(text);
  });
};

exports.create_a_text = function(req, res) {
  var new_text = new ARText(req.body);
  new_text.save(function(err, text) {
    if(err)
      res.send(err);
    res.json(text);
  });
};

exports.read_a_text = function(req, res) {
  ARText.findById(req.params.textId, function(err, text) {
    if(err)
      res.send(err);
    res.json(text);
  });
};

exports.update_a_text = function(req, res) {
  ARText.findOneAndUpdate({_id: req.params.textId}, req.body, {new: true}, function(err, text) {
    if(err)
      res.send(err);
    res.json(text);
  });
};

exports.delete_a_text = function(req, res) {
  ARText.remove({
    _id: req.params.textId
  }, function(err, text) {
    if(err)
      res.send(err);
    res.json({message: 'Task successfully delete' });
  });
};

