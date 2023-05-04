const Sequelize = require('sequelize')
const sequelize = new Sequelize({dialect: 'sqlite', storage: './database.sqlite'})



sequelize.authenticate().then(function() {
	console.log("Connection Successfull")
}).catch(function(error) {
	console.log(error)
})