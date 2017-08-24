bcrypt = require("bcryptjs");

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
        },   
    }, {
        hooks: {
            afterValidation: function(user) {
                user.password = bcrypt.hashSync(user.password, 8);
            }
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