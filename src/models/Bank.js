const Sequelize = require("sequelize");
module.exports = sequelize.define("Bank",{
    id: {
        type:Sequelize.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    name: Sequelize.STRING(15),
    amount: Sequelize.INTEGER(11),
})