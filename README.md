# Let's play Node.js backend

##Setup

- `npm install`
- `npm test`
- `npm run dev`

##Code style
Connect `.editorconfig` and `.eslintrc` to your text editor syntax hightlight

##Files structure

###Configs
Development / production / shared configs for database connection etc

###Controllers
Application routes and their logic, each controller is instance of express.Router()

###Helpers
Code and functionality to be shared by different parts of the project

###Middlewares
Express middlewares which process the incoming requests before handling them down to the routes

###Models
Database schemas without logic, simple schemas definitions

###Resources
Aggregeted logic on top of models

###Tests
UnitTests

##Libs we are using

###Express.js
Routing, etc
[Deprecated methods](http://expressjs.com/guide/migrating-5.html)

###Sequelize
Database ORM

###Winston
Logging

###Passport
For authendification

###Lodash
Helpers functions

###Bluebird
Promises