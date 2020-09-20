const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');


module.exports.getAll = async function(req, res) {
    try{
    const categories = await Category.find({user: req.user.id});
    res.status(200).json(categories);
    }catch (e){
        errorHandler(e);
    }
};

module.exports.getById = async function(req, res) {
    try{
        const category = await Category.findById({user: req.params.id});
        res.status(200).json(category);
    }catch (e){
        errorHandler(e);
    }
};

module.exports.remove = function(req, res) {

};

module.exports.create = function(req, res) {

};
module.exports.update = function(req, res) {

};
