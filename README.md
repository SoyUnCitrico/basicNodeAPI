# basicNodeAPI


## API para servidor REST
Esta API esta probada con un equipo con OS Ubuntu
Se usa una DB en POSTGRES que se puede cambiar de manera facil cambiando 
las variables de entorno en ".env" y el archivo de sequelize
Para administrar la DB se usa pgadmin

#### Prerequisitos: 
- Tener el gestor de versiones NVM para node.js:
    https://github.com/nvm-sh/nvm
    
- Tener docker desktop instalado y ejecutando en el equipo
    https://docs.docker.com/engine/install/ubuntu/
    
## Instalación
1. Descargar repositorio:
    ``` bash   
    git clone https://github.com/SoyUnCitrico/basicNodeAPI.git
    ```
2. Instalar entorno usando node 18. Mediante NVM adaptamos la version e instalamos:
    ``` bash   
        nvm install 18 && nvm use 18
        npm install
    ```
3. Habilitar POSTGRES y  PGADMIN mediante el comando:
    ``` bash   
        docker compose up -d postgres && docker compose up -d pgadmin
    ``` 
