const faker = require('faker');
const boom = require('@hapi/boom');

class RegisterService {
    constructor() {
        this.registers = [];
        this.generate();

    }

    generate() {
        const limit = 100;
        for(let i = 0; i<limit; i++) {
            const username = faker.name.firstName();
            const email = `${username}@email.com`;
            let fechasConexion = []
            let dataSizeConexion = []
            for (let f = 0; f < 3; f++) {
                const d = faker.datatype.datetime();
                const s = faker.datatype.number(999999999999999);
                fechasConexion.push(d);
                dataSizeConexion.push(s)
            }
            this.registers.push({
                id: faker.datatype.uuid(),
                username: username,
                email: email,
                position: faker.datatype.number(1234),
                ip: faker.internet.ip(),
                mac: faker.internet.mac(),
                dateCreacion: faker.datatype.datetime(),
                dateConexión: fechasConexion,   
                dateSize: dataSizeConexion,
                image: faker.image.city(),
                isBlock: faker.datatype.boolean()
            })
        }
    }

    async create(data) {
        const newRegister = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.registers.push(newRegister);
        return newRegister;
    }

    find() {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(this.registers);
            }, 2000);
        });
    }

    async findOne(id) {
        const registro = this.registers.find(item => item.id === id);
        if(!registro) {
            throw boom.notFound('Registro no encontrado')
        }
        if(registro.isBlock) {
            throw boom.conflict('El registro esta bloqueado')
        }
        return registro;
    }

    async update(id, changes) {
        const index = this.registers.findIndex((item) => item.id === id);
        if(index === -1) {
            throw boom.notFound('Registro no encontrado');
        } 

        const register = this.registers[index];
        this.registers[index] = {
            ...register,
            ...changes
        };
        return this.registers[index];
    }

    async delete(id) {
        // console.log(this.registers);
        const index = this.registers.findIndex(item => item.id === id);
        if(index === -1) {
             throw boom.notFound('Registro no encontrado');
        }

        this.registers.splice(index,1);
        return {id};
    }

}

module.exports = RegisterService;