const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getByCategoryId = async function(req, res) {
    try{
        const positions = await Position.find({
            category:req.params.categoryId,
            user: req.user.id
        });
        res.status(200).json(positions);
    }catch (e){
        errorHandler(e);
    }

};

module.exports.remove = function(req, res) {

};

module.exports.update = function(req, res) {

};