const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const MiniStatement = sequelize.define("MiniStatement",{
        recTrans : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references :{
                model: 'fundtransfers',
                key: 'id'
            }
        },
        timestamp :{
            type  : DataTypes.DATE,
            allowNull : false,
        },
        userId :{
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });
    return MiniStatement;
}