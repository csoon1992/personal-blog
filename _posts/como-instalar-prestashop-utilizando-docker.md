---
contentType: blog
slug: /como-instalar-prestashop-utilizando-docker
image: /files/como-instalar-prestashop-utilizando-docker.png
title: Cómo instalar Prestashop utilizando Docker
date: "2019-01-04T16:00:00+01:00"
tags:
  - prestashop
  - prestashop 1.7.x
  - docker
  - composer
---

En este post voy a contar cómo instalar Prestashop utilizando [Docker](https://docs.docker.com/get-started/). Es un post muy básico y sencillo que espero que ayude, especialmente, a los que se estén inicializando en el mundo de Prestashop.

Me centraré en la versión Prestashop 1.7.5.0 (así me servirá para cacharrear y ver las novedades de esta versión que, si son interesantes, os las contaré más adelante) y, en lugar de utilizar el docker-compose.yml que trae Prestashop por defecto, he utilizado un repositorio [prestashop-vessel](https://github.com/csoon1992/prestashop-vessel) que he creado anteriormente con la colaboración de mi programador friki favorito: [Antonio Gázquez](https://antoniogazquez.me/).

¡Vamos al lío!

## Preparar el entorno Docker

Preparar nuestro entorno con Docker es muy sencillo y rápido. Lo único que tenemos que hacer es abrir una terminal y realizar los siguientes pasos:

1. Clonar el repositorio git de prestashop-vessel:
   `$ git clone git@github.com:csoon1992/prestashop-vessel.git`
2. Ir a la carpeta prestashop de este repositorio:
   `$ cd prestashop-vessel`
3. Crear una copia de .env.example llamada .env con la configuración deseada:
   `$ cp .env.example .env`
4. Clonar el repositorio git de Prestashop dentro de vessel:
   `$ git clone git@github.com:PrestaShop/PrestaShop.git prestashop`
5. Ir a la raíz del proyecto
   `$ cd prestashop`
6. Hacer checkout a la rama Prestashop 1.7.5.x para trabajar con esta versión.
   `$ git checkout 1.7.5.x`
7. Eliminar el directorio .git de prestashop de nuestro proyecto para no pushear al repositorio oficial de Prestashop que nos clonamos:
   `$ rm -Rvf ./.git`
8. Arrancar docker:
   `$ cd ..`
   `$ ./vessel start`
   Tras esto, si todo ha ido correctamente, la carpeta de instalación install-dev pasará a llamarse, en este caso: adminps, tal y como he configurado en el .env.
9. Instalar las dependencias de composer (esto llevará un rato):
   `$ ./vessel composer install`

¡Ya tenemos listo nuestro entorno!
Ahora estamos listos para acceder a http://localhost en nuestro navegador para comenzar el proceso de instalación de Prestashop!

**Nota:** si queréis utilizar otro puerto distinto al 80 debéis cambiarlo en el fichero _docker-compose.yml_.

## Realizar la instalación de Prestashop

El proceso de instalación de compone de seis pasos súper sencillos:

### 1. Elección de lenguaje

![Instalación de Prestashop: Paso 1](/files/01_install.png)

### 2. Acuerdo de licencia

Ya sabéis, nos leemos el acuerdo como siempre, aceptamos y listo.

![Instalación de Prestashop: Paso 2](/files/02_install.png)

### 3. Compatibilidad del sistema

Yo de momento pasaré de la recomendación de Prestashop para obtener los datos de internacionalización más recientes, por lo que no actualizaré el **paquete de sistema ICU** ni la **extensión Intl PHP**.

![Instalación de Prestashop: Paso 3 sin error](/files/03_install_b.png)

### 4. Información de la tienda

![Instalación de Prestashop: Paso 4](/files/04_install.png)

### 5. Configuración del sistema

En este paso, se configura la conexión a la base de datos que se utilizará para este proyecto de acuerdo a las variables definidas en el **.env**.
Recordad que la dirección del servidor de base de datos es el nombre del servicio mysql definido en el docker-compose.yml

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
