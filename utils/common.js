const jwt = require('jsonwebtoken');
var obj = {};
obj.generateUUID = function () {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

obj.distinctListObjecs = function (array) {
    let listResult = [];
    if (array.length > 0) {
        array.forEach(function (item) {
            let listStr =  JSON.stringify(listResult);
            let itemStr = JSON.stringify(item);
            if(!listStr.includes(itemStr)){
                listResult.push(item);
            };
        })
    }       
    return listResult;
};
obj.paging = function(list, page = 1, per_page = 20){
    let startIndex = per_page*(page -1);
    let endIndex = startIndex + per_page;
    let total = list.length;
    if(endIndex > total){
        endIndex = total;
    }
    return list.slice(startIndex, endIndex);
}
module.exports = obj;
