const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Balance = sequelize.define("Balance",{
        curBal :{
            type  : DataTypes.BIGINT,
            allowNull : false,
        },
        timestamp :{
            type : DataTypes.DATE,
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
    return Balance;
}