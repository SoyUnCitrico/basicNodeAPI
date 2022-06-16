# basicNodeAPI


## API para servidor REST
Se usa una DB en POSTGRES que se puede cambiar de manera facil cambiando 
las variables de entorno en ".env" y el archivo de sequelize
Para administrar la DB se usa pgadmin

### Prerequisitos: 
- Tener el gestor de versiones NVM para node.js:
    
- Tener docker desktop instalado y ejecutando en el equipo
    

1. Descargar repositorio:
    ` git clone ' ' `

2. Instalar entorno usando node 14. Mediante NVM adaptamos la version e instalamos:
    ``` bash   
        nvm use 14
        npm install
    ```
3. Habilitar POSTGRES y  PGADMIN mediante el comando:
        `docker compose up -d postgres && docker compose up -d pgadmin`
    
