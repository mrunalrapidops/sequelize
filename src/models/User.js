const Sequelize = require("sequelize");
module.exports = sequelize.define("User",{
    id: {
        type:Sequelize.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    name: Sequelize.STRING(15)
})