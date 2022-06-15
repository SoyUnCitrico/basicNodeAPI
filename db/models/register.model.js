const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';
// Schema en POSTGRESSQL
const UserSchema = {
    id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: '_id_',
    },
    username:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'username',
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'email',
    },
    dateCreated: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at',
    },
    dateSessions: {
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.DATE),
        field: 'sessions',
    },
    dataSize: {
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.BIGINT),
        field: 'data_size'
    },
    ip: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'ip_adress'
    },
    mac: {
        allowNull: true,
        type: DataTypes.MACADDR,
        field: 'mac_adress'
    },
    nodo: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nodo',
        defaultValue: 'ccd'
    }
    // tags: {}

}

// const UserSchema = {
//     id: {
//         allowNull: true,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//         field: '_id_',
//     },
//     username:{
//         allowNull: true,
//         type: DataTypes.STRING,
//         field: 'username',
//     },
//     email:{
//         allowNull: false,
//         type: DataTypes.STRING,
//         unique: true,
//         field: 'email',
//     },
//     dateCreated: {
//         allowNull: false,
//         type: DataTypes.DATE,
//         defaultValue: Sequelize.NOW,
//         field: 'created_at',
//     },
//     dateSessions: {
//         allowNull: true,
//         type: DataTypes.JSON,
//         field: 'sessions',
//     },
//     dataSize: {
//         allowNull: true,
//         type: DataTypes.JSON,
//         field: 'data_size'
//     },
//     ip: {
//         allowNull: true,
//         type: DataTypes.STRING,
//         field: 'ip_adress'
//     },
//     mac: {
//         allowNull: true,
//         type: DataTypes.STRING,
//         field: 'mac_adress'
//     }
    // message: {}
    // tags: {}

// }


class User extends Model {
    static associate() {

    }
    static config(sequelize) {
        return  {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}


module.exports = { USER_TABLE, UserSchema, User}