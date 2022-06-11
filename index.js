const express = require('express');
const { routerApi } = require('./routes')
const app = express();
const port = 3005;
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, ()  => {
    console.log("Mi puerto es: " + port);
});