const express = require('express');
const path = require('path');
const cors = require('cors');
const { routerApi } = require('./routes')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3005;
app.use(express.json());
const whiteList = [
    'https://localhost:3300',
    'https://localhost:1812',
]
const options= {
    origin: (origin,callback) => {
        if(whiteList.includes(origin) || (!origin)){
            callback(null, true);
        } else {
            callback(new Error("No permitido"));
        }
    }
}
app.use(cors(options));

app.use(express.static(path.join(__dirname,'public')));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler); 
app.use(errorHandler);

app.listen(port, ()  => {
    console.log("Mi puerto es: " + port);
});