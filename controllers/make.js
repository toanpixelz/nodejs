var models = require("../models");
var Paginator = require('../utils/paginator');

exports.getList = function (req, res) {
  models.VehicleBrand.findAll({ where: { $or: [{ deleted: 0 }, { deleted: null }] } }).then(function (makes) {
    let response = { success: 1, data: makes };
    res.json(response);
  }
  ).catch(function (e) {
    let response = { success: 0, message: "get makes error!" };
    res.json(response);
  });
};


exports.getListMakePaging = function (req, res) {
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

  models.VehicleBrand.findAndCountAll(filterGlobal).then(function (result) {
    let response = { success: 1, data: result, message: "success" };
    res.json(response);
  }
  ).catch(function (e) {
    let response = { success: 0, message: "get makes error!" };
    res.json(response);
  });
};

exports.addNew = function (req, res) {
  models.VehicleBrand.create(req.body).then(function (result) {
    let respon = { id: result.id, success: 1, "message": "Add vehicle make success!" }
    res.json(respon);
  }).catch(function (e) {
    let response = { success: 0, message: "add new vehicle make error!" };
    res.json(response);
  })
};


exports.update = function (req, res) {
  let makes = [];
  models.VehicleBrand.findById(req.params.id).then(function (make) {
    make.updateAttributes(req.body).then(function (result) {
      let response = { success: 1, message: "update success!" };
      res.json(response);
    }).catch(function (e) {
      let response = { success: 0, message: "update vehicle make error!" };
      res.json(response);
    });

  }).catch(function (e) {
    res.json(e);
  });
}

exports.listModels = function (req, res) {
  let makes = [];
  models.Model.findAll({where:{$or: [{ deleted: 0 }, {deleted: null}], makeId: req.params.id}}).then(function(models) {
    let response = { success: 1, data: models, message: "success"};
    res.json(response);
  }
  ).catch(function(e){
    let response = {success: 0, message: "get makes error!"};
    res.json(response);
  });
}