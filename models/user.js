bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },   
    }, {
        hooks: {
            beforeCreate: function(user) {
                console.log(user);
                user.password = bcrypt.hashSync(user.password, 8);
            }
        }
    });
    
    // Instance Method to meet Sequeilze v4+ syntax
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }
    
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
