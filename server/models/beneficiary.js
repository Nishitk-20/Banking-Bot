const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Beneficiary = sequelize.define("Beneficiary",{
        name : {
            type : DataTypes.STRING,
            allowNull : false,
            primaryKey: true
        },
        AccountNumber :{
            type  : DataTypes.BIGINT(11),
            allowNull : false  
        },
        type :{
            type :DataTypes.STRING,
            allowNull:false
        },
        Ifsc :{
            type : DataTypes.CHAR(11),
            allowNull:false
        },
        userId :{
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });
    return Beneficiary;
}