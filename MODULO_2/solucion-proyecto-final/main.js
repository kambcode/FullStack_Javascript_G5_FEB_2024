const agregarProductoBtn = document.getElementById('agregarproductobtn');
const borrarTodosBtn = document.getElementById('borrartodosbtn');

const listaProductosUl = document.getElementById('listaproductosul');

const cantidadListaTxt = document.getElementById('cantidadlistatxt');
const nombreProductoTxt = document.getElementById('nombreproductotxt');
const cantidadProductoTxT = document.getElementById('cantidadproductotxt');
const marcaProductoTxt = document.getElementById('marcaproductotxt');


let listaProductos = [];

function limpiarCampos() {
    nombreProductoTxt.value = '';
    cantidadProductoTxT.value = '';
    marcaProductoTxt.value = '';
}

function agregarProducto() {
    listaProductos.push({
        nombre: nombreProductoTxt.value,
        cantidad: cantidadProductoTxT.value,
        marca: marcaProductoTxt.value,
    });

    limpiarCampos();
}

function eliminarTodos() {
    const allProductosLi = listaProductosUl.querySelectorAll('li');
    allProductosLi.forEach(element => {
        element.remove();
    });
}

function renderizarProductos() {
    eliminarTodos();
    cantidadListaTxt.textContent = listaProductos.length;

    for (let i = 0; i < listaProductos.length; i++) {
        const product = listaProductos[i]; // { nombre: 'pan', marca: '', cantidad: 2 }
        const productoLi = document.createElement('li');

        const nombreProductoSpan = document.createElement('span');
        nombreProductoSpan.textContent = `${product.nombre}, ${product.marca}, ${product.cantidad}`;
        
        const eliminarProductoBtn = document.createElement('button');
        eliminarProductoBtn.innerText = 'Eliminar';
        eliminarProductoBtn.style.marginLeft = '5px';
        eliminarProductoBtn.addEventListener('click', () => {
            const index = listaProductos.indexOf(product);
            listaProductos.splice(index, 1);
            cantidadListaTxt.textContent = listaProductos.length;
            productoLi.remove();
        });
     
        productoLi.appendChild(nombreProductoSpan);
        productoLi.appendChild(eliminarProductoBtn);
     
        listaProductosUl.appendChild(productoLi);
    }
}

agregarProductoBtn.addEventListener('click', () => {
    agregarProducto();
    renderizarProductos();
});

borrarTodosBtn.addEventListener('click', () => {
    listaProductos = [];
    cantidadListaTxt.textContent = listaProductos.length;
    eliminarTodos();
});
