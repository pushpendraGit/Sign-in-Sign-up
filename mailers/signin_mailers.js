



const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newUser = (email) => {
    console.log('inside newComment mailer');

    nodeMailer.transporter.sendMail({
       from: 'primenaukriu@gmail.com',
       to: email,
       subject: "Test 2 Log in",
       html: '<h1>Yup, You have Successfully loged in</h1>' 
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        
        return;
    });
}