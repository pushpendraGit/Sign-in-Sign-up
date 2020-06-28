const User = require('../models/user');

module.exports.home = function(req, res)
{

    User.find({}, function(err,users){

        if(err)
        {
            console.log('Error in finding the User for home page');

        }

        return res.render('home',{

            Users:users
        })
    })
   
}