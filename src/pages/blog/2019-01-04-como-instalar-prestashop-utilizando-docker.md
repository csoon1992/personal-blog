---
contentType: blog
path: /como-instalar-prestashop-utilizando-docker
image: /files/docker-ps-header.jpg
title: Cómo instalar Prestashop utilizando Docker
date: '2019-01-04T16:00:00+01:00'
tags:
  - prestashop
  - prestashop 1.7.x
  - docker
  - composer
---
En este post voy a contar cómo instalar Prestashop utilizando [Docker](https://docs.docker.com/get-started/). Es un post muy básico y sencillo que espero que ayude, especialmente, a los que se estén inicializando en el mundo de Prestashop.

Me centraré en la versión Prestashop 1.7.5.0 (así me servirá para cacharrear y ver las novedades de esta versión que, si son interesantes, os las contaré más adelante) y aprovecharé el fichero de configuración docker-compose.yml que viene incluido en el repositorio Github de [Prestashop](https://github.com/PrestaShop/PrestaShop/tree/1.7.5.x).

Yo no he hecho ninguna modificación en este fichero, ya que será un proyecto prueba nada más, pero podéis cambiarlo a vuestro gusto para adaptarlo a la configuración que deseéis.

## Preparar el entorno Docker

Preparar nuestro entorno con Docker es muy sencillo y rápido. Lo único que tenemos que hacer es abrir una terminal y realizar los siguientes pasos:

1. Clonar el repositorio git de Prestashop:
   `$ git clone git@github.com:PrestaShop/PrestaShop.git`
2. Ir a la raíz del proyecto
   `$ cd Prestashop`
3. Hacer checkout a la rama Prestashop 1.7.5.x para trabajar con esta versión.
   `$ git checkout 1.7.5.x`
4. Dar permisos de escritura a los directorios config/ y app/config/
   `$ sudo chmod a+rw -R config/ app/config/`
5. Dando por hecho que se tiene instalado [Composer](https://getcomposer.org/doc/00-intro.md), levantamos nuestro Docker:
   `$ docker-compose up`
    Este paso llevará algo de tiempo mientras instala todas las dependencias definidas en el fichero composer.json.

¡Ya tenemos listo nuestro entorno!
Ahora estamos listos para acceder a http://localhost:8001 en nuestro navegador para comenzar el proceso de instalación de Prestashop!

**Nota:** si queréis utilizar otro puerto distinto a 8001 debéis cambiarlo en el fichero _docker-compose.yml_.

## Realizar la instalación de Prestashop

El proceso de instalación de compone de seis pasos súper sencillos:

### 1. Elección de lenguaje

![Instalación de Prestashop: Paso 1](/files/01_install.png)

Este paso parece ser que no funciona del todo bien, pues aunque he seleccionado Español como lenguaje, veréis que el proceso de instalación sigue apareciendo en inglés, pero bueno, nada grave :)

### 2. Acuerdo de licencia

Ya sabéis, nos leemos el acuerdo como siempre, aceptamos y listo.

![Instalación de Prestashop: Paso 2](/files/02_install.png)

### 3. Compatibilidad del sistema

En este paso, suele aparecer una serie de errores de permisos de escritura en algunos directorios:

![Instalación de Prestashop: Paso 3 error](/files/03_install_a.png)

Para solucionarlos, volvemos a la terminal que teníamos abierta en la raíz del proyecto y damos permisos a estos directorios:

`$ sudo chmod a+rw -R img/ mails/ modules/ translations/ upload/ download/ app/Resources/translations/`

Tras esto, hacemos clic en el botón "Refresh" y veremos que los errores de permisos han desaparecido y podríamos continuar con la instalación. Yo de momento pasaré de la recomendación de Prestashop para obtener los datos de internacionalización más recientes, por lo que no actualizaré el **paquete de sistema ICU** ni la **extensión Intl PHP**. 

![Instalación de Prestashop: Paso 3 sin error](/files/03_install_b.png)

### 4. Información de la tienda

![Instalación de Prestashop: Paso 4](/files/04_install.png)

### 5. Configuración del sistema

En este paso, se configura la conexión a la base de datos que se utilizará para este proyecto.
Dado que estoy con Docker y en la configuración el puerto de mysql no está expuesto el puerto sino que solamente se tiene acceso desde dentro de Docker, he realizado una modificación en el fichero docker-compose.yml para reemplazar el puerto de mysql de **"3306"** a **"3306:3306"** con el objetivo de visualizar la base de datos desde una herramienta externa (en mi caso [Dbeaver](https://dbeaver.io/)).

Tras esto, reiniciamos Docker y volvemos al asistente para configurar la conexión a la base de datos atendiendo a los valores de docker-compose.yml. Veremos que en el campo Servidor de Base de Datos tendremos que poner el nombre del servicio de Docker: "mysql".

![Instalación de Prestashop: Paso 5](/files/05_install.png)

Si tras hacer clic al botón "Comprobar conexión a la base de datos ahora" nos aparece un maravilloso mensajito verde, ¡estamos de suerte!

Por último, damos al botón "Siguiente" y se comenzará a instalar Prestashop. Este proceso tardará un rato, ya que se configurará todo el sistema: ficheros de parámetros, tablas en la base de datos, tienda y lenguajes, etc.

Finalmente, obtendremos una pantalla en la que se nos informa de que la instalación ha finalizado por completo.

![Instalación de Prestashop: Paso 6](/files/06_install.png)

Acto seguido, hacemos lo que nos pide Prestashop: eliminamos la carpeta de instalación de nuestro proyecto, por motivos de seguridad.

`$ sudo rm -R install-dev/`

Ahora es el momento de comprobar que tanto el Backoffice como el Front funcionan correctamente. Normalmente, el Backoffice funcionará a la primera. Yo lo primero que hago es acceder a **Parámetros Avanzados > Información** para comprobar que no hay ningún error de configuración:

![Backoffice](/files/backoffice_info.png)

Sin embargo, el Front normalmente necesitará que demos permisos de escritura al directorio _assets/_ del tema para que pueda crear el directorio _cache/_ dentro de este.
Por tanto, volvemos a la terminal y ejecutamos el siguiente comando:

`$ sudo chmod a+rw -R themes/classic/assets/`

Recargamos la página del front y veremos que ahora sí, todo está funcionando correctamente.

![Front](/files/front.png)
