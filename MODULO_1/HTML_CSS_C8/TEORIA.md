# Conceptos de CSS layout

En este módulo vamos a ver herramientas para manejar el tema del layout de nuestras páginas, el layout se refiere a la estructura de nuestra pagina, si queremos manejarla por columnas, si queremos manejarla por filas, si queremos que los elementos varíen su tamaño con base a las pantallas y de más, avancemos y demos pie a construir páginas web muy personalizables.

Importante recordar un concepto fundamental en el desarrollo web como lo es el tema del diseño `responsive` este concepto hace referencia a una realidad de hoy día y es que nuestros desarrollos van a ser visualizados no solo de computadores con distintos tamaños de pantalla sino también de dispositivos moviles, tablets y cuanto dispositivo nuevo sale con capacidad de navegar nuestras aplicaciones, entonces, un desarrollo `responsive` es un desarrollo que se adapta a los distintos tamaños y distribuciones de pantalla que existen. Las herramientas de layout nos sirven para manejar este tema junto con los `media queries` que también estudiaremos.

## Display Flex

Como se mencionó anteriormente, flexbox es una solución al tema del desarrollo responsive que lo que nos ayuda es a plantear una distribución de nuestro contenido con base a reglas definidas para acomodar el contenido según el espacio disponible en pantalla para asegurarnos que independiente de la distribución o tamaño de la pantalla todo se visualice correcto.

Flexbox trabaja con varios conceptos y propiedades, el principal es entender que cuando hablamos de flexbox tenemos dos clases de elementos, el padre o contenedor `flex-container` y los hijos o elementos `flex-ítems`. Guiemonos de la siguiente imagen.

![Guia Flex Box](./resources/GuiaFlexBox.png)

Así como la estructura basica de HTML se basa en direcciones de flujo en bloque y en línea flexbox se basa en `flex-flow directions`, es decir, el flujo de los elementos en flexbox depende del eje principal, por defecto es el que se visualiza en la imagen, pero este se puede cambiar por propiedades.

Miremos los elementos de la imagen presentada.

- `main-axis` Esta es la mencionada dirección del flujo de los elementos que por defecto es la mostrada y que se puede modificar mediante la propiedad `flex-direction`
- `main-start | main-end` Los ítems-flex son posicionados entre el inicio y el fin del contenedor
- `main-size` Hace referencia al ancho o largo del elemento padre, dependiendo de la dirección del flujo este valor es el largo o el ancho del contenedor
- `cross axis` Este eje es perpendicular al eje principal, por tanto, su dirección depende del la dirección principal establecida
- `cross-start | cross-end` Las lineas flex son puestas entre el inicio y el final de la dimensión `cross`
- `cross size` Es la inversa del main size, depende del flujo establecido del flex

Teniendo claros los conceptos de la distribución flex, miremos entonces las propiedades que podemos utilizar para hacer uso de estos elementos para darle una distribución a nuestros elementos.

### **Propiedades para el padre**

- `display` Es la propiedad base del flex-box, define un contenedor como flex yu establece el flujo por defecto de flex-box
  - ```
    .container{
      display: flex;
    }
    ```
- `flex-direction` Es la propiedad con la cual podemos cambiar el flujo de nuestro flex-box, como comentamos, por defecto toma el valor de row, pero puede tomar muchos distintos valores.
  - ```
      .container{
        display: flex;
        flex-direction: row | row-reverse | column | column-reverse
      }
    ```
  - Siendo `row` el valor por defecto, `row-reverse` sería el mismo flujo, pero en sentido contrario y para el caso de `column` sería la dirección contraria, es decir, en lugar de ser por filas sería por columnas y su reverse sería en sentido contrario.
- `flex-wrap` Por defecto los flex-ítems van a intentar acomodarse todos en una línea, para cambiar este comportamiento usamos esta propiedad de la siguiente manera

  - ```
          .container{
            flex-wrap: nowrap | wrap | wrap-reverse
          }
    ```
  - `nowrap` es el valor por defecto, el cual le indica a los +ítems que intenten acomodarse en una línea, luego podemos pasarle el valor `wrap` para que se acomoden en varias lineas según la necesidad de arriba hacia abajo y finalmente tenemos `wrap-reverse` que le indica a los ítems que se acomoden en varias líneas según necesidad pero de abajo hacia arriba

- `justify-content` Llegamos a una de las propiedades principales de los contenedores flex, esta propiedad le indica a los ítems de cada línea del `eje principal` que distribución deben llevar dentro de esta, los elementos de cada línea tomarán esta distribución y se acomodarán según el espacio disponible.
  - ```
          .container{
            justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
          }
    ```
  - `flex-start` Este es el valor por defecto, los elementos son alineados desde el inicio en la dirección del flujo flex establecida
  - `flex-end` Los elementos son alineados desde el fin de la dirección del flujo flex
  - `center` Los ítems serán centrados a lo largo de la línea
  - `space-between` Los ítems serán espaciados por partes iguales en la línea en dirección del flujo flex
  - `space-around` Los ítems serán espaciados por partes iguales en la línea con espacio entre el inicio y fin del espacio flex también
  - `space-evenly` Los ítems serán espaciados por partes iguales en la línea, pero el espacio al inicio y fin será el mismo que entre cada elemento
  - Miremos la siguiente imagen donde tenemos un ejemplo visual de cada posible valor de la propiedad.
  - ![Guía justify-content](./resources/JustifyContent.png)
- `align-ítems` Esta propiedad tiene el mismo funcionamiento de justify-content, pero no actúa sobre el eje principal si no sobre el secundario de nuestro flujo flex, es decir, sobre el `cross axis`, nos ayuda entonces por defecto a fijar un comportamiento para la alineación vertical de nuestros flex-ítems. Miremos sus posibles valores
  - ```
          .container{
            align-ítems: stretch| flex-start | flex-end | center | baseline
          }
    ```
  - `stretch` Este es el valor por defecto, estira los elementos de manera que cubran toda la altura del flex-container
  - `flex-start` Los ítems son puestos al inicio del cross axis
  - `flex-end` Contrario al flex-start los ítems son puestos al final del cross axis
  - `center` Los ítems son centrados en la altura del flex-container
  - `baseline` Este tiene que ver con la alineación del texto, los ítems son alineados de manera que el texto de todos los elementos inicie en una misma altura
  - Miremos una imagen para guiarnos en el funcionamiento de estas propiedades
  - ![Guía align-ítems](./resources/AlignItems.png)
- `gap, row-gap, column-gap` Esta propiedad nos permite indicar una margen entre lineas, columnas o en general para nuestra distribución flex.
  - ```
          .container {
            display: flex;
            gap: 10px;
            gap: 10px 20px; /* row-gap column gap */
            row-gap: 10px;
            column-gap: 20px;
          }
    ```
  - Miremos una imagen para guiarnos en su funcionamiento
  - ![Guía gap](./resources/Gap.png)

### **Propiedades para los hijos**

Miremos ahora las propiedades que pueden tomar los hijos o los flex-ítems. Cabe aclarar que para que estas propiedades tomen efecto hace falta que estén definidas para elementos que estén dentro de padres flex

- `order` Por defecto los elementos flex son organizados en el orden que son declarados en el HTML, sin embargo, con la propiedad order podemos darles un valor numérico de manera que los organice de menor a mayor.
  - ```
          .item{
            order: 2
          }
          .itemConMenorPrioridad{
            order: 5
          }
    ```
  - Ejemplo visual:
  - ![Guía orden](./resources/Order.png)
- `flex-grow` Nos sirve para indicar si algún elemento tiene prioridad para crecer en su línea si es posible, entre mayor el número mayor prioridad va a tener para crecer. Si todos los elementos tienen 1 entonces todos tendrán igual espacio, si dos tienen 1 y otro tiene 2, este tomará el doble de espacio y de esta manera funciona. Esta propiedad no permite valores negativos
  - ```
          .item {
            flex-grow: 4; /* por defecto 0 */
          }
    ```
  - Miremos una imagen para guiarnos en su funcionamiento
  - ![Guía flex-grow](./resources/FlexGrow.png)
- `flex-shrink` Es la inversa a flex-grow, indica la habilidad de un elemento para encogerse en caso de ser necesario. No permite valores negativos
  - ```
          .item {
            flex-shrink: 4; /* por defecto 0 */
          }
    ```
- `flex-basis` Define el valor por defecto del tamaño de un elemento antes de distribuir el espacio restante entre los elementos según el alineado
  - ```
          .item {
            flex-basis: 20%; /* por defecto auto */
          }
    ```
- `align-self` Permite sobreescribir el alineado para un item en particular, puede tomar los mismos valores que la propiedad align-ítems y tiene el mismo funcionamiento solo que individual para el item que se aplique la propiedad
  - ```
          .item {
            align-self: auto | flex-start | flex-end | center | baseline | stretch
          }
    ```

Hasta aquí va el contenido de Flex-Box, como vemos es una herramienta que utilizada con conceptos ya vistos como `position` podemos personalizar en gran medida las distribuciones de nuestras apps. Puedes ampliar tus conocimientos en la siguiente guia de flex:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/


## Media Queries

Hablando del tema del desarrollo responsive, también se menciona otro concepto que es mas enfocado a las buenas practicas y es el desarrollo `Mobile First` el cual se refiere a que siempre debemos desarrollar nuestras aplicaciones primero para dispositivos mobile y luego adaptarlas a que funcionen en pantallas con distribuciones como las de los computadores y televisores, estos primeros tienen pantallas mas pequeñas y requieren de un desarrollo mas especifico. Entremos en el tema y luego miramos los beneficios e implicaciones del `Mobile First` design.

Los media queries son condicionales que podemos utilizar que toman metadata del dispositivo donde se está ejecutando nuestra aplicación y nos prestan información util como el tamaño de la pantalla para así poder usar estos condicionales para aplicar estilos dependiendo del dispositivo donde se esté ejecutando nuestra aplicación.

Miremos un ejemplo de una sentencia que hace uso de media queries

```
@media (max-width: 600px) {
    .title {
        color: green;
    }
}

.title {
    font-size: 100px;
}

```

En este ejemplo tenemos una clase la cual tiene por estilo un font size de 100px, si se cumple la condición de que la pantalla tenga un maximo de 600px el texto también tomará el estilo de color verde.

Estos media queries también los podemos aplicar en el HTML cuando importamos nuestra hoja de estilos de la siguiente manera.

```
<link rel="stylesheet" media="(max-width: 800px)" href="estilosMoviles.css" />
```

En este caso aplicamos esta hoja de estilos solo para pantallas de maximo 800px, que podría interpretarse como que son de moviles.

Los media queries son condicionales que podemos componer de distintos elementos, mirémoslos.

- `Tipos de dispositivos` Los media queries pueden componerse de tipos de dispositivos, miremos algunos de los posibles valores mas utilizados con frecuencia.
  - `all` Aplica para todos los dispositivos
  - `screen` Para referirse a pantallas
- `Caracteristicas de las pantallas`
  - `orientation` Nos permite verificar la orientación del dispositivo de visualización
  - `resolution` Nos permite operar sobre la resolución de la pantalla
  - `width` Operamos con el ancho de la pantalla
  - `height` Operamos con el alto de la pantalla

> Existen muchos mas tipos de dispositivos sobre los cuales se puede hacer query y también muchas mas caracteristicas del dispositivo para ejecutar nuestras media queries, estos solo son los mas comunes y utilizados. Lee sobre mas posibles operadores [**aquí**](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

Con estas operaciones podemos utilizar también operadores lógicos para construir condicionales mas complejos, miremos cuales podemos utilizar y algunos ejemplos.

- `and` Condicional and, nos permite verificar que siempre se cumplan ambas partes del condicional
- `lista separada por comas` Es el operador `or`, cada sentencia separada por coma es un condicional aparte y dado el caso que cualquier se cumpla se aplicarán los estilos definidos
- `not` Operador de negación, nos permite validar que se cumpla lo opuesto de un condicional
- `only` Nos sirve para filtrar que dispositivos pueden usar nuestros estilos, suele ser util para filtrar por ejemplo que navegadores viejos no carguen estilos que podrían hacer la aplicación fallar porque no los soportan

Incluso podemos hacer condicionales anidados, miremos unos cuantos ejemplos.

```
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    .container {
      display: flex;
    }
  }
}
```

En el ejemplo anterior, primero validamos que el dispositivo soporte la propiedad `display: flex` para luego entonces si se cumple, verificar si el dispositivo es una pantalla y tiene un ancho minimo de 900px, si todo esto anterior se cumple, se aplicará un estilo de `display: flex` a los elementos con clase `.container`.

```
@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi){
  body {
    display: flex;
  }
}

@media screen, print {
body {
  line-height: 1.2;
}

```

Este ejemplo anterior nos ilustra la utilización de los operadores lógicos que podemos utilizar para apoyarnos en la construcción de nuestros condicionales, en este ejemplo utilizamos el operador and, las comas y el operador `only`.

Cerremos el tema hablando entonces el tan cotizado `mobile first design`, la pauta clara para aplicarlo de manera correcta mediante el uso de media queries sería entonces diseñando nuestra aplicación primero para moviles, entonces esto implica que nuestros media queries deberían de ser dirigidos a que hacer cuando la pantalla supera las condiciones o caracteristicas de un dispositivo movil, entonces, los media queries deberían utilizar mas frecuentemente el modificar `min` tanto para `min-width` como para `min-heigth` de manera que nuestros estilos por defecto sean los pensados para pantallas pequeñas.

## Final del módulo
Llegamos al final de este módulo en el cual aprendimos sobre `flexbox`, en general vimos los elementos que necesitamos para tener claro como se da un desarrollo responsive y que nos deja sin duda frente a un panorama mucho mas claro en cuanto a buenas practicas para tener desarrollos frontend con un nivel mucho mas productivo. En los siguientes modulos empezaremos a profundizar sobre manejadores de versiones de códigos y profundizaremos mas sobre Javascript y su implementación al desarrollo web.