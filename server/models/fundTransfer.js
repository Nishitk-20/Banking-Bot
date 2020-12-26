const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const FundTransfer = sequelize.define("FundTransfer",{
        type :{
            type :DataTypes.STRING,
            allowNull: false
        },
        amount :{
            type : DataTypes.BIGINT,
            allowNull : false
        },
        balance : {
            type : DataTypes.BIGINT,
            allowNull : false
        },
        benName : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model: 'beneficiaries',
                key: 'name'
            }
        }
    });
    return FundTransfer;
}