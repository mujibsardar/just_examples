'use strict';
module.exports = function(app) {
  let exampleList = require('../controllers/examplesController');

  // todoList Routes
  app.route('/example')
    .get(exampleList.list_examples)
    .post(exampleList.create_an_example);


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
