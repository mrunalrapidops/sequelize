'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("bank",{
      id: {
        type:Sequelize.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    name: Sequelize.STRING(15),
    amount: Sequelize.INTEGER(11),
    userid: Sequelize.INTEGER(11),
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bank");  
  }
};
