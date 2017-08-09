'use strict';

module.exports = function(app) {
  var ARController = require('../controllers/arTextsController.js');

  // ARTexts Routes
  app.route('/texts')
    .get(ARController.list_all_texts)
    .post(ARController.create_a_text);
  
  app.route('/texts/:textId')
    .get(ARController.read_a_text)
    .put(ARController.update_a_text)
    .delete(ARController.delete_a_text);

  // ARSessions Routes
  app.route('/sessions')
    .get(ARController.list_all_sessions)
    .post(ARController.create_a_session);
  
  app.route('/sessions/:sessionId')
    .get(ARController.read_a_session)
    .put(ARController.update_a_session)
    .delete(ARController.delete_a_session);
};
