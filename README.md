# basicNodeAPI


## API para servidor REST
Se usa una DB en POSTGRES que se puede cambiar de manera facil cambiando 
las variables de entorno en ".env" y el archivo de sequelize
Para administrar la DB se usa pgadmin

#### Prerequisitos: 
- Tener el gestor de versiones NVM para node.js:
    https://github.com/nvm-sh/nvm
    
- Tener docker desktop instalado y ejecutando en el equipo
    https://docs.docker.com/desktop/

#### Instalación: 
1. Descargar repositorio:
    ` git clone https://github.com/SoyUnCitrico/basicNodeAPI.git `

2. Instalar entorno usando node 14. Mediante NVM adaptamos la version e instalamos:
    ``` bash   
        nvm use 14
        npm install
    ```
3. Habilitar POSTGRES y  PGADMIN mediante el comando:
        `docker compose up -d postgres && docker compose up -d pgadmin`
    
