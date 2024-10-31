// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "/img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "/img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "/img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "/img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "/img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "/img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "/img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "/img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "/img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "/img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "/img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "/img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "/img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "/img//pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "/img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "/img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "/img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "/img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");  //selecciono el id y lo meto en una var 
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let   botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")



function cargarProductos (productosElegidos) {
    //cuando el html este vacio o mejor dicho vacio yo el html para agregar lo deseado con el boton y evento click objetivo mostrar productos segun categoria
    contenedorProductos.innerHTML = "";

    
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
        
        `;
        contenedorProductos.append(div);
        
    }) 
    actualizarBotoneAgregar();
  
    
}

cargarProductos(productos); // passo el arrray entero 

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active")) //desactivo el diseño blanco del boton

        e.currentTarget.classList.add("active");//activo  el diseño blanco del boton al hacer click

        if (e.currentTarget.id != "todos"){     
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id );
             tituloPrincipal.innerText =  productoCategoria.categoria.nombre;
           

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); // creo array con productos q condicen con id
            cargarProductos(productosBoton);
        }else{

            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
    }

)

})

function actualizarBotoneAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito); 
    } );
  
}
let productosEnCarrito;
let nuevoNumerito;


//TRAIGO DEL LOCAL STORAGE OS PRODUCTOS SELECCIONADOS 
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


//SI AHI el el localstorage q productos en carrito sea igual alo del LS y sino q sea un array vacio
if  (productosEnCarritoLS){
productosEnCarrito = JSON.parse(productosEnCarritoLS);
actualizarNumerito();

}else{
     productosEnCarrito = [];
};


function agregarAlCarrito(e){
    //tomo el parametro "e" como evento y asigno el id q tiene c/ objeto en agregar entonces c/vez q apreto agregar me trae el id de ese producto
    const idBoton = e.currentTarget.id;
   //traigo el objeto del producto entero 
    const productoAgregado = productos.find(producto => producto.id === idBoton );
    
//chequeo q el producto no este agregado y si es asi no agregue de nuevo SINO Q SUME OTRA CANTIDAD DEL MISMO 
    
     if (productosEnCarrito.some(producto => producto.id === idBoton)){
        //busco el nro del indice del array nuevo 
         const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
         productosEnCarrito[index].cantidad++;
         
     }else {
        //agrego al objeto la propiedad cantidad (todo esto al nuevo array generado )
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);     
     }
    actualizarNumerito();

    //guardo nuevo array al localstorage para usarlo en el carrito 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    

};

 function actualizarNumerito (){    
    //sumo las cantidades seleccionadas (agregadas) independientemente cual sea el producto los va contando y sumando 
     let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
     numerito.innerText= nuevoNumerito;  
      
 }



