const User = require('../models/user');

const userMailer = require('../mailers/signin_mailers');


//match the password

//find is user is already present

// if not presrent then make the user


module.exports.create = function(req, res)
{
    console.log(req.body);

    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    }

    User.findOne({email:req.body.email}, function(err, user){

        if(!user)
        {
            let name = req.body.name;

            let email = req.body.email;

            let password = User.generateHash(req.body.password);

            console.log(password);


            User.create({
                name:name,
                email:email,
                password:password
            }, function(err, user){

                


                if(err)
                {
                    console.log('There is an error in creating the user');

                    return res.redirect('/user/sign-up');
                }

                return res.render('sign_in');


            })

            

            // User.create(req.body, function(err,user){

            //     if(err)
            //     {
            //         console.log('There is an error in creating the user');

            //         return res.redirect('/user/sign-up');
            //     }

            //     return res.render('sign_in');
            // })
        }
    })



}

module.exports.createSession = function(req, res){

    userMailer.newUser(req.body.email);

    return res.redirect('/');
   
}

module.exports.destroy = function(req, res)
{

    req.logout();

    return res.redirect('/users/sign-in');
}


module.exports.sign_up = function(req, res)
{

    return res.render('sign_up');


}



module.exports.sign_in = function(req, res)
{

    return res.render('sign_in');

    
}