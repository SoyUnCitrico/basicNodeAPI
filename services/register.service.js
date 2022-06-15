const faker = require('faker');
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool')
// const sequelize = require('./../libs/sequelize.js');
const { models } = require('./../libs/sequelize')

class RegisterService {
    constructor() {
        // this.registers = [];
        // this.generate();
    //     this.pool = pool;
    //     // Escucha por si hay algun error en conexion
    //     this.pool.on('Error', (err) => console.error(err));
    }

    // generate() {
    //     const limit = 100;
    //     for(let i = 0; i<limit; i++) {
    //         const username = faker.name.firstName();
    //         const email = `${username}@email.com`;
    //         let fechasConexion = []
    //         let dataSizeConexion = []
    //         for (let f = 0; f < 3; f++) {
    //             const d = faker.datatype.datetime();
    //             const s = faker.datatype.number(999999999999999);
    //             fechasConexion.push(d);
    //             dataSizeConexion.push(s)
    //         }
    //         this.registers.push({
    //             id: faker.datatype.uuid(),
    //             username: username,
    //             email: email,
    //             ip: faker.internet.ip(),
    //             mac: faker.internet.mac(),
    //             dateCreacion: faker.datatype.datetime(),
    //             dateConexión: fechasConexion,   
    //             dateSize: dataSizeConexion,
    //             image: faker.image.city(),
    //             isBlock: faker.datatype.boolean()
    //         })
    //     }
    // }

    async create(data) {
        const newRegister = await models.User.create(data);
        return newRegister;
    }

    async find() {
        const client = await models.User.findAll({
            order: [
                ['id', 'DESC'],
              ],
        });
        return client;
        // return new Promise((resolve,reject) => {
        //     setTimeout(()=>{
        //         resolve(this.registers);
        //     }, 2000);
        // });
    }

    async findByID(id) {
        const user = await models.User.findByPk(id);
        if(!user) {
            throw boom.notFound('Usuario no encontrado');
        }
        return user;
    }

    async findOne(emailString) {
        const user = await models.User.findOne({
            where: { email : emailString}
        });
        if(!user) {
            throw boom.notFound('Usuario no encontrado');
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findByID(id);
        // console.log(changes);
        delete changes.email;
        // console.log(changes);
        const answer = await user.update(changes)
        return answer;
    }

    async delete(email) {
        // console.log(this.registers);
        const user = this.findOne(email);
        await user.destroy();
        return { email }
    }

}

module.exports = RegisterService;   