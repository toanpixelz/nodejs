var models = require("../models");
var Paginator = require('../utils/paginator');

exports.getList = function(req, res) {
  models.Model.findAll({where:{$or: [{ deleted: 0 }, {deleted: null}]}}).then(function(models) {
    let response = { success: 1, data: models};
    res.json(response);
  }
  ).catch(function(e){
    let response = {success: 0, message: "get makes error!"};
    res.json(response);
  });
};

exports.getListModelPaging = function (req, res) {
  let filterValue = '';
  if (req.query.value) {
    filterValue = req.query.value.trim();
  }
  let paginator = new Paginator(req.query.page, req.query.per_page);
  let filterGlobal = {};
  // let condition = { employeeIdTrans: userId };
  filterGlobal.where = { $or: [{ deleted: 0 }, { deleted: null }] };
  if (filterValue.length > 0) {
    filterGlobal.where.name = { $like: '%' + filterValue + '%' }
  }
  filterGlobal.order = 'id ASC';
  filterGlobal.offset = paginator.getOffset();
  filterGlobal.limit = paginator.getLimit();

  models.Model.findAndCountAll(filterGlobal).then(function (result) {
    let response = { success: 1, data: result, message: "success" };
    res.json(response);
  }
  ).catch(function (e) {
    let response = { success: 0, message: "get models error!" };
    res.json(response);
  });
};

exports.addNew = function (req, res) {
  models.Model.create(req.body).then(function (result) {
    let respon = { id: result.id, success: 1, "message": "Add vehicle model success!" }
    res.json(respon);
  }).catch(function (e) {
    let response = { success: 0, message: "add new vehicle model error!" };
    res.json(response);
  })
};


exports.update = function (req, res) {
  models.Model.findById(req.params.id).then(function (model) {
    model.updateAttributes(req.body).then(function (result) {
      let response = { success: 1, message: "update success!" };
      res.json(response);
    }).catch(function (e) {
      let response = { success: 0, message: "update vehicle model error!" };
      res.json(response);
    });

  }).catch(function (e) {
    res.json(e);
  });
}