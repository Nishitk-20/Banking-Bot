const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("User",{
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },
        AccountNumber :{
            type  : DataTypes.INTEGER.UNSIGNED,
            allowNull : false    
        }
    });
    return User;
}