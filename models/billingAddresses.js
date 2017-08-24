module.exports = function(sequelize, DataTypes) {
    var billingAddresses = sequelize.define("billingAddresses", {
        StreetName: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        AptNum: {
            type: DataTypes.INTEGER,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 1
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ZipCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
     
    billingAddresses.associate = function (models) {
        billingAddresses.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return billingAddresses;
}; 