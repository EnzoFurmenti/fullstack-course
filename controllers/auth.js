const bcrypt = require('bcryptjs');
const User = require('../models/User')


module.exports.login = function(req, res) {

};

module.exports.register = async function(req, res) {
    // email password

    const candidate = await User.findOne({email:req.body.email});
    if(candidate){
        // Пользователь существует, нужно отдать ошибку
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой. '
        });
    }else{
        // Нужно создать пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email:req.body.email,
            password:bcrypt.hashSync(password,salt)
        });
        try{
            await user.save();
            res.status(201).json(user);
        }catch(e){
            //Обработать ошибку
        }
    }
};