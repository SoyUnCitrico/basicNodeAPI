const faker = require('faker');

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
                image: faker.image.city()
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
        return this.registers.find(item => item.id === id);
    }

    async update(id, changes) {
        // console.log(this.registers);
        const index = this.registers.findIndex((item) => item.id === id);
        if(index === -1) {
             throw new Error('Registro no encontrado');
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
             throw new Error('Registro no encontrado');
        }

        this.registers.splice(index,1);
        return {id};
    }

}

module.exports = RegisterService;