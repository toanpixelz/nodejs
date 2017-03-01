const MakeController = require('./controllers/make');
const ModelController = require('./controllers/model');
const express = require('express');
module.exports = function (app) {

  const apiRoutes = express.Router(),
    makeRoutes = express.Router(),
    modelRoutes = express.Router();
  //= ========================
  // make routes
  //= ========================
  apiRoutes.use('/make', makeRoutes);
  makeRoutes.get('/', MakeController.getList);
  makeRoutes.get('/listPaging', MakeController.getListMakePaging);
  makeRoutes.post('/', MakeController.addNew);
  makeRoutes.get('/listModel/:id', MakeController.listModels);
  makeRoutes.put('/:id', MakeController.update);

  //= ========================
  // model routes
  //= ========================
  apiRoutes.use('/model', modelRoutes);
  modelRoutes.get('/', ModelController.getList);
  modelRoutes.get('/listPaging', ModelController.getListModelPaging);
  modelRoutes.post('/', ModelController.addNew);
  modelRoutes.put('/:id', ModelController.update);
  
  // Set url for API group routes
  app.use('/api', apiRoutes);
};