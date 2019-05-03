module.exports = async()=>{
    const user = require("./models/User");
    const bank = require("./models/Bank");

    //Association
    User.hasMany(bank,{as:"bank",foreignKey:'userID'});
    bank.belongsTo(User,{as:"User",foreignKey:'userID'});

    const errHandler = (err) =>{
        console.log("Error",err);
    } 
    const user = await User.create({name:"Hari"}).catch(errHandler);
    const bank = await bank.create({name:"BOB",amount:12345,userid:user.id}).catch(errHandler);

    //fetch data from Database
    const users = await User.findAll({where:{username:"hari"},include :[{model:Banks,as:"bank"}]}).catch(errHandler);
    console.log("Bank detail:",users);
}