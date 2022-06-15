const { Client } = require('pg');

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'emme',
        password: 'm4nd4r1n',
        database: 'my_suavi'
    });
    await client.connect();
    return client;
}

module.exports = getConnection;
