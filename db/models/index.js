const { User, UserSchema } = require('./register.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
}

module.exports = setupModels;