const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supporter: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        }
    }, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync(10)
                user.password = bcrypt.hashSync(user.password, salt)
            }
        }
    })
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }
    return User
}
