'use strict';

module.exports = function(app) {
  var arText = require('../controllers/arTextsController.js');

  // ARTexts Routes
  app.route('/texts')
    .get(arText.list_all_texts)
    .post(arText.create_a_text);
  
  app.route('/texts/:textId')
    .get(arText.read_a_text)
    .put(arText.update_a_text)
    .delete(arText.delete_a_text);
};
