'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("User",{
      id: {
        type:Sequelize.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    name: Sequelize.STRING(15),
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("User");  
  }
};
