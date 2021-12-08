const express = require('express');
const app = express();

// //add the middleware to the application level and define it with use(), it will execute before every single controller action
// app.use(loggingMiddleware);

// //controller action
// app.get('/', (req, res) => {
//     res.send('Home page')
// })

// //only executes on single route(users) on the application
// app.get('/users', authorizeUsersAccess, (req, res) => {
//     console.log(req.admin)
//     res.send('Users Page')
// })

// function loggingMiddleware(req, res, next) {
//     console.log('Inside Middleware')
//     console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
//     next(); //we need to call this function to call the controller action otherwise the app will load forever

// }

// //authorization middleware for users page
// //This code sets an admin variable on the req object which is then accessed in the controller action for the users page.
// function authorizeUsersAccess(req, res, next) {
//     //console.log('authorizeUsersAccess Middleware')
//     if (req.query.admin === 'true') {
//         req.admin = true //This middleware now checks to see if the query parameter admin=true is in the URL and if it is not an error message is shown to the user. 
//         next();
//     } else {
//         res.send('ERROR: You must be an admin')
//     }
// }

// function middleware(req, res, next) {
//     if (req.valid) {
//         return next()       //if called without 'return' it will execute the next middleware until there no more and the error message will be sent to the user, which we don't want 
//     }
//     res.send('Invalid request')
// }

//This code shows how the app.use statements come first the middleware in those statements will be executed first in the order they were added. Next the app.get middleware is defined and again they will be executed in the order they are in the app.get function.
app.use(middlewareThree)
app.use(middlewareOne)

app.get('/', middlewareTwo, middlewareFour, (req, res) => {
    console.log('Inside Home Page')
    res.send('Home Page')
})

function middlewareOne(req, res, next) {
    console.log('Middleware One')
    next()
}

function middlewareTwo(req, res, next) {
    console.log('Middleware Two')
    next()
}

function middlewareThree(req, res, next) {
    console.log('Middleware Three')
    next()
}

function middlewareFour(req, res, next) {
    console.log('Middleware Four')
    next()
}

app.listen(5000, () => console.log('server listening on port 5000'));
