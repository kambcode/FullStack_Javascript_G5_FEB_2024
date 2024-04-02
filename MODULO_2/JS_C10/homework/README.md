# Tareas del módulo

Las tareas de los módulos son pensadas para profundizar en los temas expuestos e interiorizar más el conocimiento. 

## Tarea

Para esta vamos a crear una pagina web que permita a el usuario adminsitrar una lista de compras.

Los criterios de aceptación de tu lista de compras son:

1. Debes tener un input donde el usuario debe digitar el producto que quiere agregar a la lista de compras.
2. Debes incluir un botón llamado "Add Item" o "Agregar a la lista", una vez el usuario de click a el boton, el producto que se escribió en el punto 1 se debe agreagr a la lista (utiliza un array de strings para almacenar los productos de la lista)
3. El diseño es totalmente libre. Pero a continuación encontrarás un demo de cómo debe funcionar tu lista de compras. 

[![Demo](https://img.youtube.com/vi/cypni3sVz7s/1.jpg)](https://www.youtube.com/watch?v=cypni3sVz7s)

https://www.youtube.com/watch?v=cypni3sVz7s


4. Todo el codigo de javascript debe estar incluido en un archivo de JS. 
5. **OPCIONAL**: Crea un boton llamdo "Limpiar lista" que debe dejar la lista de compras en blanco eliminando todos los elementos de la misma

Prácticas como la siguiente **NO SON PERMITIDAS**

```html
<input type="button" id="number1" value="1" onclick="shopingList.push('Item')">
```

Para ello debes usar un selector e incluir la lógica en el archivo de javascript. Recuerda, el HTML debe estar lo más limpio posible. Una práctica sería la siguiente:

```html
<input type="button" onClick="addToShopingList()">
```

```javascript 
function addToShopingList () {
    // Tu codigo aca
}
```

o tambien puedes hacer lo siguiente


```html
<input type="button" value="1" id="number1">
```

```javascript 
const element = document.getElementById("number1");

element.addEventListener('click', function() {
    // Tu codigo aca
    alert("Clicked");
});
```