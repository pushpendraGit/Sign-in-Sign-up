const express = require('express');

const app = express();

const port = 8000;

const db  = require('./config/mongoose');




const session = require('express-session');

const passport = require('passport');

const passportLocal = require('./config/passport-local-strategy');

const passportGoogle = require('./config/passport-google-oauth2-stratgey');
const flash = require('connect-flash');

const custemMware = require('./config/middleware');


const MongoStore = require('connect-mongo')(session);
const expressLayouts = require('express-ejs-layouts');





const cookieParser = require('cookie-parser')




app.use(cookieParser());

app.use(express.urlencoded());

app.use(express.static('./assets'));


app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




app.set('view engine', 'ejs');

app.set('views', './views');


app.use(session({
    name:'codeial',
    //ToDo change the secret before deployment in production mode

    secret:'blasomething',
    saveUninitialized:false,
    cookie:{
        maxAge:(100*60*100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
    
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use( custemMware.setFlash);


app.use('/',require('./routes'));




app.listen(port,function(err){

    if(err)
    {
        console.log('There is an Error in making the server ');

        return;
    }

    console.log('Your server is running at the port', port);
})