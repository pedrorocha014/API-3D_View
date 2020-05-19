var path = require('path');

exports.ShowModel = async function(req, res){
    res.sendFile(path.join(__dirname,'../view','index.html'));
}