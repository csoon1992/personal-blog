---
contentType: blog
slug: /como-crear-tema-hijo-en-prestashop
image: /files/chiltheme-header.jpg
title: Cómo crear un tema hijo en Prestashop 1.7
date: "2019-03-04T21:00:00+01:00"
tags:
  - prestashop
  - prestashop 1.7.x
  - temas Prestashop
  - childtheme
---

A petición de un buen compañero de trabajo, hoy os voy a contar cómo crear un tema hijo (_childtheme_) en Prestashop 1.7.x.

Antes de comenzar, pongámonos con la parte teórica para responder a dos preguntas clave:

## ¿Qué es un tema hijo o _childtheme_?

Un _childtheme_ es un tema que extiende todas las funcionalidades y apariencia de un tema padre o tema base del que extiende.

## ¿Por qué debería crear un childtheme y cuándo?

La ventaja que se obtiene al crear un tema hijo es que podemos modificar la funcionalidad y apariencia de un tema de Prestashop (por ejemplo: del tema por defecto _Classic_) sin tener que preocuparnos de las posibles posteriores actualizaciones del Core de Prestashop, ya que con el tema hijo evitaremos que con esta actualización nuestras modificaciones de plantillas, CSS y/o JS de nuestro tema personalizado se pierdan.

Por tanto, siempre que estemos ante la necesidad de modificar cualquier fichero de la carpeta del tema _Classic_, deberíamos plantearnos crear un tema hijo si queremos que nuestros cambios perduren tras las actualizaciones del Core.

## Crear un childtheme

He aquí la página de producto del tema _Classic_ de Prestashop:

![Página de producto por defecto {1163x786}](/files/default_product_page.png)

Imaginemos que queremos mostrar la referencia debajo del nombre del producto, que el tema _Classic_ no lo hace por defecto.

Es muy tentador ir a la plantilla (.tpl) de la página de producto: _\[rootPath]/themes/classic/templates/catalog/product.tpl_ y realizar ahí las modificaciones oportunas.

Sin embargo, hacer esto es un error ya que si en el futuro se realiza una actualización del Core podríamos perder los cambios realizados.

Para evitar esto, llega la posibilidad de crear un tema hijo.

### ¿Cómo se crea un tema hijo?

Crear un tema hijo es realmente sencillo. El tema padre pone una semillita en el tema madre y... :P

Ahora en serio. Para crear un tema hijo sólo necesitamos crear una carpeta en themes/ con el nombre que queramos ponerle a nuestro tema hijo. Yo me complicaré un montón y le llamaré _csoon-childtheme_.

Tras esto, clonamos la carpeta _config_ del tema padre (_Classic_) en la carpeta del tema hijo (_csoon-childtheme_) y el preview.png (como aún no tengo modificaciones del tema hechas, dejo la misma preview ya que no hay cambios), de modo que tendremos lo siguiente:

![Estructura básica del tema hijo {366x202}](/files/childtheme-folder-structure.png)

Ahora realizaremos unas pequeñas modificaciones en el fichero de configuración del tema hijo: _theme.yml_.

![Fichero de configuración del tema hijo {1229x624}](/files/childtheme-config.png)

Básicamente, lo que he hecho ha sido cambiar la información básica del tema (líneas 1-8) y descomentar (quitar la almohadilla "#") que había delante de _use_parent_assets_ para que se incluyan los assets del tema padre y toda la funcionalidad se mantenga tal cual está en el tema padre.

Con esto, ya tenemos un tema hijo creado. Ahora mismo es un tema hijo sin sentido, ya que no se ha realizado ninguna modificación respecto al tema padre, pero lo que es estar, está. De hecho, es hora de ir al Backoffice > Diseño > Tema y logotipo. Aquí ya debemos visualizar tanto el tema Classic seleccionado como un nuevo tema disponible llamado csoon-childtheme:

![Listado de temas en el BackOffice {1082x990}](/files/backoffice_themes.png)

Seleccionamos el nuevo y ya estamos listos para realizar modificaciones en el tema hijo e ir viéndolos aplicados en el front.

![Tema hijo seleccionado {1081x579}](/files/childtheme_selected.png)

### Realizar modificaciones en el tema hijo

Procedamos a incluir la referencia justo debajo del nombre del producto en la página de producto.

Para ello, creamos una plantilla para la página del producto en el tema hijo: _\[rootPath]/themes/csoon-childtheme/templates/catalog/product.tpl_ que extienda de la plantilla del tema padre.

```html
{extends file='parent:catalog/product.tpl'}
```

Si recargamos la página, seguiremos sin ver cambios, ya que simplemente extendemos de la plantilla del padre, sin cambio realizado aún.

Ahora, para añadir la referencia justo debajo del nombre del producto modificaré el bloque que contiene dicho elemento: _page_header_container_

Así está este bloque en el padre:

```html
{block name='page_header_container'} {block name='page_header'}
<h1 class="h1" itemprop="name">
  {block name='page_title'}{$product.name}{/block}
</h1>
{/block} {/block}
```

Así quedará este bloque en el tema hijo:

```html
{block name='page_header_container'} {block name='page_header'}
<h1 class="h1" itemprop="name">
  {block name='page_title'}{$product.name}{/block}
</h1>
<p class="product-reference">{$product.reference}</p>
{/block} {/block}
```

Para tener algún cambio más de ejemplo, eliminaremos la descripción de la página de producto, lo cual se encuentra en el bloque _product_description_short_ del tema padre:

```html
{block name='product_description_short'}
<div id="product-description-short-{$product.id}" itemprop="description">
  {$product.description_short nofilter}
</div>
{/block}
```

Lo modificamos y quedará así:

```html
{block name='product_description_short'}{/block}
```

Por tanto, la plantilla product.tpl del tema hijo completa, con la referencia incluida y la descripción corta eliminada, quedará así:

```html
{extends file='parent:catalog/product.tpl'} {block name='page_header_container'}
{block name='page_header'}
<h1 class="h1" itemprop="name">
  {block name='page_title'}{$product.name}{/block}
</h1>
<p class="product-reference">{$product.reference}</p>
{/block} {/block} {block name='product_description_short'}{/block}
```

Este asunto, aunque es sencillo, tiene varias vertientes, ya que al igual que se pueden crear plantillas en el tema hijo, se pueden crear nuevos CSS y JS que predominen frente a los existentes en el tema padre.

Para no alargar demasiado el post, lo cortaré por aquí, totalmente dispuesta a hacer un nuevo post de creación de nuevos CSS y JS si así lo necesitáis.

Espero haberos podido ayudar a entender cómo se crean los hijos...
