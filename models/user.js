//var bcrypt = require("bcrypt"); can be used to hash users passwords, implentation coming soon

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function(models) {
        User.hasMany(models.orderHistory, {
            onDelete: "cascade"
        });
          
    };
    
    User.associate = function(models) {
        User.hasMany(models.billingAddresses, {
            onDelete: "cascade"
        });
    };

    return User;
};