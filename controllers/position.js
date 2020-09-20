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

module.exports.create = async function(req, res) {
    try{
    const position = await new Position({
        name:req.body.name,
        cost: req.body.cost,
        category:req.body.category,
        user:req.user.id
        }).save();
    res.status(201).json(position);
    }catch (e){
        errorHandler(e);
    }
};

module.exports.update = function(req, res) {

};