# instrucciones para correr el proyecto - Garbarino

## clonar repositorio:
```
git clone https://github.com/arturoliduena/garbarino.git 
```
## Instalando Docker

**Linux**

Para instalar la última versión de docker vamos a usar el script que nos ofrecen ellos en [get.docker.com](https://get.docker.com/) Si entramos a ese link, vamos a ver que en esa URL hay un script .sh, que básicamente permite instalar docker en varias plataformas conocidas. Para ejecutarlo usamos el siguiente comando en la terminal: ```curl -sSL https://get.docker.com/ | sh```

o

```wget -qO- https://get.docker.com/ | sh```

Probablemente le pidan permisos de root, ya que dentro del script utiliza sudo.
Cuando se termina de ejecutar el comando, el script sugiere que hagamos el siguiente comando:
```
sudo usermod -aG docker
```
**Windows y Mac**

Para instalarlo en windows es necesario tener habilitada la opción de virtualización en la BIOS.
Para instalarlo en windows o mac, vamos a descargar el [docker toolbox](https://www.docker.com/get-docker) para nuestro SO.

Una vez bajado vamos a ejecutarlo, y le damos NEXT a todo, instalando todos los componentes de Docker.

Para probar si funciona en windows, hagan doble click en Docker QuickStart, y si ven la ballenita en la consola, entonces docker ya está instalado y funcionando.

Ejecuten docker-machine ls , para saber los datos de la máquina virtual que les creó docker. Esto es sólo necesario en windows y mac. Tomen nota de la IP que tiene esa máquina virtual, ya que la vamos a necesitar luego.

## iniciar proyecto

Para correr el proyecto utilice docker-compose up

Linux
```
sudo docker-compose up --build
```

En su Web Browser:

> http://localhost:90

### extra
si necesita correr el proyecto nuevamente, puede aparecer el siguiente error:

```
ERROR: for postgres  Cannot start service postgres: driver failed programming external connectivity on endpoint garbarino_postgres_1 (ac18c7103fa2a1125c4cf9e98005cce5aa40db0c6e262afb475fa8223e890423): Error starting userland proxy: listen tcp 0.0.0.0:5432: bind: address already in use
ERROR: Encountered errors while bringing up the project.
```

Se tiene que detener el uso de postgres en el puerto 5432, use el siguiente comando:
```
sudo service postgresql stop
```

para borrar los container:
```
sudo docker-compose rm -v 
```
