---
contentType: blog
path: /como-instalar-prestashop-utilizando-cli/
image: /files/docker-ps-header.jpg
title: Cómo instalar Prestashop utilizando CLI
date: '2019-01-12T16:00:00+01:00'
tags:
  - prestashop
  - prestashop 1.7.x
  - cli
  - script
---
En mi anterior [post](/como-instalar-prestashop-utilizando-docker) os conté cómo instalar Prestashop 1.7 utilizando [Docker](https://docs.docker.com/get-started/) y el asistente de instalación que nos ofrece Prestashop. Pero... ¿qué ocurre con aquellos que son tan fanáticos de la consola de comandos?

Prestashop trae consigo un pequeño script de instalación vía consola de comandos que permite realizar la instalación sin necesidad de acceder a nuestro navegador.

La primera parte es exactamente igual que en el post anteriormente mencionado, por ello, os dejo enlace para no repetirnos: [Preparar el entorno Docker](/como-instalar-prestashop-utilizando-docker#preparar-el-entorno-docker).

Tras realizar estos 9 pasos, ya estamos listos para comenzar la instalación de Prestashop.

## Realizar la instalación de Prestashop

Abrimos nuestra terminal y vamos a la carpeta instalación (en mi caso /adminps tal y como lo configuré como "adminps" en el .env) situada en la raíz de nuestro proyecto.


  `$ cd Prestashop/adminps/`

En ese directorio veremos que existe un script llamado **index_cli.php**. Este es el script que nos permitirá realizar la instalación de Prestashop mediante comando. Para conocer las opciones que le podemos enviar, ponemos la siguiente línea en la terminal:


  `$ ./vessel install`

![Parámetros para el script index_cli](/files/posts/how-install-ps-via-cli/index_cli_params.png)

Ahora procedemos a crear el comando que nos realizará la instalación completa de nuestro Prestashop y lo dejará listo para comenzar a funcionar con nuestra tienda.


  `$ ./vessel install --db_server=mysql --db_user=basicusr --db_password=usersecret --db_create=1 --prefix=ps_ --name=Prestashop --firstname=Cristina --lastname=Soler --email=csoon1992@gmail.com --password=admin --language=es`

Según la configuración deseada, le pasaremos unas opciones u otras. En mi caso me ha valido con las siguientes:

* **db_server:** es muy importante que le especifiquemos el puerto, pues si no lo hacemos, no encontrará el servidor mysql.
* **db_password:** contraseña para el usuario mysql, que en este caso lo he dejado por defecto (root).
* **db_create:** forzamos que se cree la base de datos si no existe, ya que nosostros no hemos creado la base de datos previamente.
* **prefix:** prefijo para las tablas creadas en esta base de datos.
* **name:** nombre de la tienda.
* **firstname:** nombre del usuario admin que se creará.
* **firstname:** apellidos del usuario admin que se creará.
* **email:** correo electrónico del usuario admin que se creará.
* **password:** contraseña del usuario admin que se creará, necesaria para acceder al panel de administración (Backoffice).
* **language:** idioma en el que queremos realizar la instalación.

**Nota:** no te preocupes si olvidas alguno de ellos, pues la mayoría de estas opciones de configuración se pueden modificar desde el Backoffice una vez finalizada la instalación.

Si todo ha ido correctamente, aparecerá el mensaje "-- Installation successful! --".
Es el momento de navegar un poco tanto por el front como por el backoffice y si todo está OK, eliminamos la carpeta de instalación por motivos de seguridad:


`$ sudo rm -R install-dev/`
