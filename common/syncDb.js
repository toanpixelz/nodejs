var models = require("../models");
var clientTypes = require("../seeders/clienttype.json");

var clients = require("../seeders/client.json");

var serviceprovidertypes = require("../seeders/serviceprovidertype.json");
var serviceproviders = require("../seeders/serviceprovider.json");
var customertypes = require("../seeders/customertype.json");
var customers = require("../seeders/customer.json");

var countries = require("../seeders/country.json");

var regions = require("../seeders/region.json");
var states = require("../seeders/state.json");
// var towns = require("../seeders/town.json");

var areas = require("../seeders/area.json");
var locations = require("../seeders/location.json");
var tarrifs = require("../seeders/tarrif.json");
var servicedistances = require("../seeders/servicedistance.json");
var servicetimes = require("../seeders/servicetime.json");
var servicetypes = require("../seeders/servicetype.json");
var services = require("../seeders/service.json");
var servicerates = require("../seeders/servicerate.json");

var serviceprovidertarrifs = require("../seeders/serviceprovidertarrif.json");

var suppliers = require("../seeders/supplier.json");
var coverbrands = require("../seeders/coverbrand.json");

var vehiclebrands = require("../seeders/vehiclebrand.json");
var covervehiclebrands = require("../seeders/covervehiclebrand.json");
var actiontypes = require("../seeders/actiontype.json");
var casestatuses = require("../seeders/casestatus.json");

var makes = require("../seeders/make.json");

var modelss = require("../seeders/model_.json");
var faulttypes = require("../seeders/faulttype.json");
var casetypes = require("../seeders/casetype.json");
var employees = require("../seeders/employee.json");

var racases = require("../seeders/racase.json");

var actionlogs = require("../seeders/actionlog.json");

var covertypes = require("../seeders/covertype.json");
var policies = require("../seeders/policy.json");

// var serviceorders = require("../seeders/serviceorder.json");
// var activationlogs = require("../seeders/activationlog.json");

var users = require("../seeders/user.json");
var roles = require("../seeders/role.json");
var userroles = require("../seeders/userrole.json");

var resources = require("../seeders/resource.json");
var permissions = require("../seeders/permission.json");

// models.sequelize.query("SELECT t.* FROM ServiceProviders s inner join ServiceProviderTarrifs st on s.id = st.ServiceProviderId inner join Tarrifs t on st.TarrifId = t.id where s.ServiceProviderTypeId = 1 and t.ServiceTypeId = 1 and t.regionId = 1"
//         ).then(function(data){
//             console.log(data);
//             return data;
//         });

// models.sequelize.query('drop database db_development').then(function(){
//     models.sequelize.query('CREATE DATABASE db_development').then(function(){
        models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(function(){
        models.sequelize.sync({force:true}).then(function () {

            // console.log(models, 'faulttypes');
            // console.log(models, 'casetypes');

            // return;
            // const userpromise = models.User.bulkCreate(users);
            // const departmentromise = models.Department.bulkCreate(departments);
            
            // const clientTypePromise = models.Client.bulkCreate(clientTypes);
            
            const clientPromise = models.Client.bulkCreate(clients);
            const serviceprovidertypePromise = models.ServiceProviderType.bulkCreate(serviceprovidertypes);
            const serviceproviderPromise = models.ServiceProvider.bulkCreate(serviceproviders);
            const customertypePromise = models.CustomerType.bulkCreate(customertypes);
            const customerPromise = models.Customer.bulkCreate(customers);
            
            const countryPromise = models.Country.bulkCreate(countries);
            const regionPromise = models.Region.bulkCreate(regions);
            const statePromise = models.State.bulkCreate(states);
            // const townPromise = models.Town.bulkCreate(towns);

            const areaPromise = models.Area.bulkCreate(areas);
            const locationPromise = models.Location.bulkCreate(locations);
            const tarrifPromise = models.Tarrif.bulkCreate(tarrifs);
            const servicedistancePromise = models.ServiceDistance.bulkCreate(servicedistances);
            const servicetimePromise = models.ServiceTime.bulkCreate(servicetimes);
            const servicetypePromise = models.ServiceType.bulkCreate(servicetypes);
            const servicePromise = models.Service.bulkCreate(services);
            const serviceproviderTarrifPromise = models.ServiceProviderTarrif.bulkCreate(serviceprovidertarrifs);
            const supplierPromise = models.Supplier.bulkCreate(suppliers);
            const coverbrandPromise = models.CoverBrand.bulkCreate(coverbrands);

            const vehiclebrandPromise = models.VehicleBrand.bulkCreate(vehiclebrands);
            const covervehiclebrandPromise = models.CoverVehicleBrand.bulkCreate(covervehiclebrands);

            // define for racase:
            const actiontypePromise = models.ActionType.bulkCreate(actiontypes);
            const caseStatusPromise = models.CaseStatus.bulkCreate(casestatuses);

            const makePromise = models.Make.bulkCreate(makes);
            
            const modelPromise = models.Model.bulkCreate(modelss);
            const faulttypePromise = models.FaultType.bulkCreate(faulttypes);
            const casetypePromise = models.CaseType.bulkCreate(casetypes);
            
            const employeePromise = models.Employee.bulkCreate(employees);
            // const racasePromise = models.Racase.bulkCreate(racases);
            // const actionlogPromise = models.Actionlog.bulkCreate(actionlogs);

            const serviceratePromise = models.ServiceRate.bulkCreate(servicerates);
          
            const coverTypePromise = models.CoverType.bulkCreate(covertypes);
            const policyPromise = models.Policy.bulkCreate(policies);
            // const serviceorderPromise = models.ServiceOrder.bulkCreate(serviceorders);
            // const activationlogPromise = models.ActivationLog.bulkCreate(activationlogs);

            const userPromise = models.User.bulkCreate(users);
            const rolePromise = models.Role.bulkCreate(roles);
            const userrolePromise = models.UserRole.bulkCreate(userroles);
            const resourcePromise = models.Resource.bulkCreate(resources);
            const permissionPromise = models.Permission.bulkCreate(permissions);

             const arrayPromise = [];
             // arrayPromise.push(userpromise);
             // arrayPromise.push(departmentromise);
             // arrayPromise.push(clientTypePromise);

             arrayPromise.push(clientPromise);
             arrayPromise.push(serviceprovidertypePromise);
             arrayPromise.push(serviceproviderPromise);
             arrayPromise.push(customertypePromise);
             arrayPromise.push(customerPromise);
             arrayPromise.push(countryPromise);

             arrayPromise.push(regionPromise);
             arrayPromise.push(statePromise);
            //  arrayPromise.push(townPromise);

             arrayPromise.push(areaPromise);
             arrayPromise.push(locationPromise);
             arrayPromise.push(tarrifPromise);
             arrayPromise.push(servicedistancePromise);
             arrayPromise.push(servicetimePromise);
             arrayPromise.push(servicetypePromise);
             arrayPromise.push(servicePromise);
             arrayPromise.push(serviceratePromise);
             arrayPromise.push(serviceproviderTarrifPromise);
             arrayPromise.push(supplierPromise);
             arrayPromise.push(coverbrandPromise);
             
             arrayPromise.push(vehiclebrandPromise);
             arrayPromise.push(covervehiclebrandPromise);
             arrayPromise.push(actiontypePromise);
             arrayPromise.push(caseStatusPromise);

             arrayPromise.push(makePromise);
             
             arrayPromise.push(modelPromise);
             arrayPromise.push(faulttypePromise);
             arrayPromise.push(casetypePromise);
             arrayPromise.push(employeePromise);
            //  arrayPromise.push(racasePromise);
            //  arrayPromise.push(actionlogPromise);

             arrayPromise.push(coverTypePromise);
             arrayPromise.push(policyPromise);
            //  arrayPromise.push(serviceorderPromise);
            //  arrayPromise.push(activationlogPromise);
             
             arrayPromise.push(userPromise);
             arrayPromise.push(rolePromise);
             arrayPromise.push(userrolePromise);
             arrayPromise.push(resourcePromise);
             arrayPromise.push(permissionPromise);
             

             return Promise.all(arrayPromise).then(function(data){
                console.log("seed data success!");
             }).catch(function(e){
                 console.log(e);
                //   console.log(e.errors.message);
             });
        })
        
    })

// })
