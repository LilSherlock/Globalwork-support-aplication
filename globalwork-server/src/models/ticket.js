module.exports = (sequelize, DataTypes) => {
    const ticket = sequelize.define('ticket', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: DataTypes.STRING
    })
    return ticket
  }
  