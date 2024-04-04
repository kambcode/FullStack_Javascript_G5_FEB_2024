const wrapper = document.getElementById('wrapper');
const links = document.getElementsByClassName('link');
const divs = document.getElementsByTagName('div');
const input = document.getElementsByName('edad'); // Solo se puede usar en el nodo raiz, en el nodo document
// console.log(wrapper.getElementsByName('edad')); // Error

/*console.log(wrapper);
console.log(links);
console.log(divs);
console.log(input);*/

// querySelector permite obtener a cualquier elemento en el DOM a traves de un selector css
// devuelve el primer elemento que encuentre y haga match con el selector especificado
// # si queremos buscar por id
// . si queremos buscar por clases
// sin ningun caracter nada si queremos buscar por etiqueta
const wrapper2 = document.querySelector('#wrapper');
console.log(wrapper2);

const linkBold = wrapper2.querySelector('.link');
const lastLinkBold = wrapper2.querySelector('.link:last-of-type');
console.log(linkBold);
console.log(lastLinkBold);


// NodeList vs HTMLCollection
/* Lista de nodos
    - Puede contener nodos de tipo elemento, de tipo texto, de comentarios, de atributos, de documento
    - Puede usar forEach para recorrer los elementos de la lista
    - No es una lista viva, es decir no se actualiza aunque el DOM cambie
*/

/* Lista HTML
    - No se puede usar forEach
    - Se actualiza aunque el DOM cambie
    - Puedo obtener a un elemento de la lista por su posicion a traves del metodo item
*/
const linksHTML = document.getElementsByClassName('link');
const linksNode = document.querySelectorAll('.link');

const tagAnchor = document.createElement('a');
tagAnchor.setAttribute('class', 'link');
tagAnchor.textContent = 'Hello world!';
document.body.append(tagAnchor);

console.log(linksHTML);
console.log(linksNode);

linksNode.forEach((element) => {
    console.log(element);
});

// crear elemento 'li'
// el estado de la tarea: input type="checkbox"
// el nombre de la tarea: span
// boton de eliminar la tarea: Eliminar -> addEventListener ('click')
// li.appendChild(checkbox)
// li.appendChild(tareaTexto)
// li.appendChild(btnEliminar)