# Sign-in-Sign-up

This is a secure sign-up and log-in system using passport-local for authenticating users

## Sign-UP Views:

![Sign-up](https://github.com/pushpendraGit/Sign-in-Sign-up/blob/master/assets/img/sign-up.png?raw=true)

## Sign-In Views


![Sign-In](https://github.com/pushpendraGit/Sign-in-Sign-up/blob/master/assets/img/sign-in.png?raw=true)


## Password Stored In Database is Incrypted

![Sign-In](https://github.com/pushpendraGit/Sign-in-Sign-up/blob/master/assets/img/password.jpg?raw=true)


# Dependency

| Name |       Work|
| -----|       ----|
| Mongoose| To connect with Mongodb |
| ejs|  EJS or Embedded Javascript Templating is a templating engine used by Node.js. Template engine helps to create an HTML template with minimal code |
| nodemon| For automatically restarting the node application when file changes in the directory are detected. |
| bcrypt| For password-hashing function when store password into data base  |
| Nodemailer | It allow easy as cake email sending  |
| Crypto | The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions. |
| connect-flash | For Showing flashmessages.  |
| Passport  | For authentication middleware  |

# How To Use

1. Clone this project.
2. Start by installing npm and mongoDB if you don't have them already.
3. Run the Mongo Server.
4. Navigate to Project Directory by :
```javascript
cd test
```
5.run following commands :
```javascript
npm install 
```

```javascript
npm start or node index.js
```

# Directory Structure and flow of The Code

This code follows MVC pattern and hence everything is differentiated and well managed:

/routes - containes all the routes.

/assets - static js css and image files.

/controller - contains functions to connect to different views.

/model - to store data in db we need models.

/config - contains config files for mongoos or any other files being used.

/views - used by ejs(templating engine) for server side rendering.

Feel free to use and contribute! :)




