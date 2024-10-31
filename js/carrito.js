//traigo los productos agregados y guardados en local storage 

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const contenedoCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
 // lo hago let xq se crean despues despus q se haga el div
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar")


function cargarProductosCarrito (){


    if (productosEnCarrito && productosEnCarrito.length > 0){

        contenedoCarritoVacio.classList.add("disabled"); //asi se oculta
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto =>{  
            
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML= `
    
            
            <img id="carrito-producto-imagen" class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div id="carrito-producto-titulo" class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div id="carrito-producto-cantidad" class="carrito-producto-cantidad">
                <small>Cantidas</small>
                <p>${producto.cantidad}</p></p>
            </div>
            <div id="carrito-producto-precio" class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div id="carrito-producto-subtotal" class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            
            `;
            contenedorCarritoProductos.append(div);
    
    
            })
           
    }else{
    
        contenedoCarritoVacio.classList.remove("disabled"); //asi se oculta
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
    }
    actualizarBotoneEliminar();
    actualizarTotal();
    
   

}

cargarProductosCarrito();



function actualizarBotoneEliminar () {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito); 
    } );
  
}

//cuando hago click en el boton eliminar del carrito
function eliminarDelCarrito (e){
    const idBoton = e.currentTarget.id; //trae el id
    // const productoEliminado = productosEnCarrito.find(producto => producto.id === idBoton); //trae el objeto entero 
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
   
    productosEnCarrito.splice(index,1);//se borra del array el producto q elimine 
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));


    }
    botonVaciar.addEventListener("click", vaciarCarrito);

    function vaciarCarrito (){
       productosEnCarrito.length= 0;
       localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
       cargarProductosCarrito()

    };

    function actualizarTotal (){
        const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad),0);
        total.innerText = `$ ${totalCalculado}`;

    }

    botonComprar.addEventListener("click",comprarCarrito);

    function comprarCarrito (){

       productosEnCarrito.length= 0;
       localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
       
        contenedoCarritoVacio.classList.add("disabled"); //asi se oculta
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");

    };
    
    
   
   