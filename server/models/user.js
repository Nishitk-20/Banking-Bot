const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("User",{
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },
        AccountNumber :{
            type  : DataTypes.BIGINT(11),
            allowNull : false    
        }
    });
    return User;
}