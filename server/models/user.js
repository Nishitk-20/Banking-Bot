const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("User",{
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },
        AccountNumber :{
            type  : DataTypes.BIGINT(11),
            allowNull : false,
<<<<<<< HEAD
            unique: true 
=======
            unique : true
>>>>>>> 66bd1e04ed9d887d484b8c9cd4ad7ceeadaf5f35
        },
        auth : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        }
    });
    return User;
}