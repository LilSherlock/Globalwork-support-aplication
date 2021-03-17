module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ticketStatus: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'pendiente'
    },
    userPriority: {
        type: DataTypes.STRING,
        allowNull: true
    },
    supPriority: {
        type: DataTypes.STRING,
        allowNull: true
    }
    })
    return Ticket
}
