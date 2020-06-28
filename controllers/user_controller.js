const User = require('../models/user');

const userMailer = require('../mailers/signin_mailers');


module.exports.profile = async function(req, res)
{

  User.findById(req.params.id,function(err,user){

    if(err)
    {
        console.log('Error in finding the user for profile')
        
        return res.redirect('back');
    }



    return res.render('profile',{

       puser:user,
       id : req.user.id
    })
  })
}

module.exports.update =  function(req, res){

    User.findById(req.params.id, function(err, user){

        if(err)
        {
            console.log('err');

            return  res.redirect('/users/profile');
        }

        

        let resu = User.validPassword(req.body.old, user.password);

        if(resu == false)
        {

            console.log('Your Old Password is Wrong');

            req.flash('error','Your old Password is wrong');

            return res.redirect('back');

          
            


        }

        let password = User.generateHash(req.body.new);

        User.findByIdAndUpdate(req.params.id,{
            password:password
        },function(err,user){

            if(err)
            {

                console.log('There is an error in updating the password');
            }
        })


        req.flash('success','Your Password is updated');

      

        

        console.log('password is updated');


        return res.redirect('back');

       



    
    })
   

    
}


//match the password

//find is user is already present

// if not presrent then make the 







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

    req.flash('success','Logged in Successfully');

    userMailer.newUser(req.body.email);

    return res.redirect('/');
   
}

module.exports.destroy = function(req, res)
{

    req.logout();

    req.flash('success','You have logged out');

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