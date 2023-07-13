//constructor Date dias que se mantiene la oferta redondeado hacia abajo con Math.floor
const promocion = new Date("July 27, 2023")
const hoy = (new Date())

const milisegundosPorDia = 86400000

//los dias que restan de la promocion visualizado en la pagina con queryselector 
let promocion1 = document.querySelector("#promo");
promocion1.innerHTML = "Promoción Valida por " +  Math.floor((promocion - hoy ) / milisegundosPorDia) + "dias";
promocion1.style.background = "lightgreen";
promocion1.style.color = "black";
promocion1.style.borderRadius = "4px";

//algoritmo con condicional if else
/*let condition = true
let años = Number(prompt('Ingrese año de nacimento: '))
while (condition) {
if (años < 2005){
alert("Bienvenido es mayor de 18")
condition = false
} else {
alert ("no puede ver la pagina si es menor de 18")
años = Number(prompt('Ingrese año de nacimiento: '))

}
}

//Ciclo while que de repite en hasta que se ingresa el si o el SI
let entrada = prompt("¿desea comprar un NFT?SI/NO");
while(( entrada !== "SI" ) && (entrada !== "si"))
{
   switch (entrada) {
       case  "NO":
            alert("no puede ver la pagina");
            break;
        case  "no":
            alert("no puede ver pagina");
            break;     
       default:
           alert("escriba SI o NO");
           break; 
   }
   
   entrada = prompt("¿desea comprar un NFT?SI/NO");
   
}
//FUNCION Constructor para completar los datos del usuario (Pascalcase string)
function Persona (nombre, apellido, email, nft){ 
    this.nombre = nombre 
    this.apellido = apellido 
    this.email = email
    this.nft = nft 
    }
    
    const nombre = prompt ("ingresar nombre") 
    const apellido = prompt ("ingresar apellido") 
    const email = prompt ("ingresar email")
    const nft = prompt ("numero de NFT que deseo comprar del 1 al 12")

     if (nft == 1) {
            alert("ELEGISTE EL NFT NUMERO UNO");
        }else if (nft == 2) {
            alert("ELEGISTE EL NFT NUMERO DOS");
        }else if (nft == 3) {
            alert("ELEGISTE EL NFT NUMERO TRES");
        }else if (nft == 4) {
            alert("ELEGISTE EL NFT NUMERO CUATRO");
        }else if (nft == 5) {
            alert("ELEGISTE EL NFT NUMERO CINCO");
        }else if (nft == 6) {
            alert("ELEGISTE EL NFT NUMERO SEIS");
        }else if (nft == 7) {
            alert("ELEGISTE EL NFT NUMERO SIETE");
        }else if (nft == 8) {
            alert("ELEGISTE EL NFT NUMERO OCHO");
        }else if (nft == 9) {
            alert("ELEGISTE EL NFT NUMERO NUEVE");
        }else if (nft == 10) {
            alert("ELEGISTE EL NFT NUMERO DIEZ");
        }else if (nft == 11) {
            alert("ELEGISTE EL NFT NUMERO ONCE");
        }else if (nft == 12) {
            alert("ELEGISTE EL NFT NUMERO DOCE");   
        }else {
            alert("ERROR presione F5 para volver"); 
        }
        
    
    const persona = new Persona(nombre, apellido, email, nft)
    console.log(persona)
    

    //OBJETO y ARRAY FUNCIONES DE ORDEN SUPERIOR
    const productos = [
        {id: 1, producto: 'NFT1', precio: 2500, vendido: "disponible"},
        {id: 2, producto: 'NFT2', precio: 2000, vendido: "disponible"},
        {id: 3, producto: 'NFT3', precio: 2000, vendido: "vendido"},
        {id: 4, producto: 'NFT4', precio: 2000, vendido: "disponible"},
        {id: 5, producto: 'NFT5', precio: 2100, vendido: "disponible"},
        {id: 6, producto: 'NFT6', precio: 2100, vendido: "disponible"},
        {id: 7, producto: 'NFT7', precio: 2100, vendido: "disponible"},
        {id: 8, producto: 'NFT8', precio: 2200, vendido: "disponible"},
        {id: 9, producto: 'NFT9', precio: 2200, vendido: "disponible"},
        {id: 10, producto: 'NFT10', precio: 2200, vendido: "disponible"},
        {id: 11, producto: 'NFT11', precio: 2300, vendido: "disponible"},
        {id: 12, producto: 'NFT12', precio: 2300, vendido: "disponible"}
    ]

    for (const producto of productos) {
        console.log(producto.id);
        console.log(producto.producto);
        console.log(producto.precio);
        console.log(producto.vendido);
    }

        const buscado = productos.find(producto => producto.id == nft ); 
        console.log(buscado);
    
    
    alert("PRECIO FINAL + IVA= "+ buscado.precio * 1.21);
    alert("STOCK= "+ buscado.vendido.toLocaleUpperCase());
    
    //PRECIO TOTAL EN EL CARRITO visualizado en la pagina con queryselector dependiendo del precio del nft
    let Total = document.querySelector("#Total");
    Total.innerHTML = "TOTAL $" + buscado.precio * 1.21;
    Total.style.background = "lightgreen";
    Total.style.color = "black";
    Total.style.borderRadius = "4px";

    // Funcion quedan() para saber cuantos Nft tengo disponibles
    let nftdisponibles = 11
    function quedan(){ 
    console.log("quedan: "+nftdisponibles)
    alert("NFT DISPONIBLES: "+nftdisponibles);
    nftdisponibles = nftdisponibles -1; 
    return nftdisponibles
    }
    quedan()

    function saludar() {
             
    alert("Muchas Gracias!! solo resta completar el formulario para efectuar la compra si se encuentra disponible")
        
    }
        
    saludar()   

*/
     //OBJETO y ARRAY FUNCIONES DE ORDEN SUPERIOR, DESESTRUCTURACION DE ARRAY

    const shopContent  = document.getElementById("shopContent");
    const verCarrito = document.getElementById("verCarrito");
    const modalContainer = document.getElementById("modal-container");
    const cantidadCarrito = document.getElementById("cantidadCarrito");
/*
    const productos = [
        {id: 1, producto:'NFT1', precio: 2500, vendido: "disponible", comprado: "", imagen:"./img/000.png", cantidad: 1,},
        {id: 2, producto: 'NFT2', precio: 2000, vendido: "disponible", comprado: "", imagen:"./img/1.jpg", cantidad: 1,},
        {id: 3, producto: 'NFT3', precio: 2000, vendido: "", comprado: "vendido", imagen:"./img/2.jpg", cantidad: 1,},
        {id: 4, producto: 'NFT4', precio: 2000, vendido: "disponible", comprado: "", imagen:"./img/3.jpg", cantidad: 1,},
        {id: 5, producto: 'NFT5', precio: 2100, vendido: "disponible", comprado: "", imagen:"./img/4.jpg", cantidad: 1,},
        {id: 6, producto: 'NFT6', precio: 2100, vendido: "disponible", comprado: "", imagen:"./img/5.jpg", cantidad: 1,},
        {id: 7, producto: 'NFT7', precio: 2100, vendido: "disponible", comprado: "", imagen:"./img/6.jpg", cantidad: 1,},
        {id: 8, producto: 'NFT8', precio: 2200, vendido: "disponible", comprado: "", imagen:"./img/7.jpg", cantidad: 1,},
        {id: 9, producto: 'NFT9', precio: 2200, vendido: "disponible", comprado: "", imagen:"./img/8.jpg", cantidad: 1,},
        {id: 10, producto: 'NFT10', precio: 2200, vendido: "disponible", comprado: "", imagen:"./img/9.jpg", cantidad: 1,},
        {id: 11, producto: 'NFT11', precio: 2300, vendido: "disponible", comprado: "", imagen:"./img/10.jpg", cantidad: 1,},
        {id: 12, producto: 'NFT12', precio: 2300, vendido: "disponible", comprado: "", imagen:"./img/11.png", cantidad: 1,}
    ]
*/
    //DOM METODOS DE ACCESO A LOS NODOS, DEFINIMOS EL INNERHTML Y AGREGAMOS EL CONTENEDOR CON APPEND AL BODY
    //OPERADOR LOGICO OR, SI EXISTE SE LO ASIGNA AL CARRITO SINO ARRAY VACIO

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    productos.forEach((product) =>
    {
    let content = document.createElement ("div");
    content.className = "car";
    content.innerHTML = 
    `<img src="${product.imagen}"> 
    <h3>${product.producto}</h3>
    <p class="precio">${product.precio}$ </p>
    <p class="vendid">${product.vendido}</p>
    <p class="comprado">${product.comprado}</p>`
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Añadir a Carrito";
    comprar.className ="comprar";
    content.append(comprar);

    //EVENTOS DEL MOUSE HACIENDO CLICK EN AÑADIR A CARRITO EL DOM

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat){
            carrito.map((prod) =>{
            if(prod.id === product.id){
            prod.cantidad++;    
            }
            });
        }else{
        carrito.push({
            id:product.id,
            producto:product.producto,
            precio:product.precio,
            vendid:product.vendido,
            comprado:product.comprado,
            img:product.imagen,
            cantidad:product.cantidad,
        });
    }
        console.log(carrito);
        console.log(carrito.length);
        carritoAgregar();
        guardarLocal();
    }); 
    });
    const menuCarrito = () =>{
        modalContainer.innerHTML = "";
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
        <h1 class="modal-header-title">CARRITO</h1>
        ` ;
     modalContainer.append(modalHeader);
     const modalButton = document.createElement("h2");
     modalButton.innerHTML = "x";
     modalButton.className = "modal-header-button";

     //PARA QUE CIERRE EL MODAL

     modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
     });
     modalHeader.append(modalButton);
     
     //TENEMOS QUE RECORRER EL CARRITO

     carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3> ${product.producto}</h3>
        <p> ${product.precio} $</p>
        <p> ${product.vendid}</p>
        <p> ${product.comprado}</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total+Iva: ${product.cantidad * product.precio * 1.21}</p>
        <span class="delete-product">X</span>
        ` ;
        modalContainer.append(carritoContent);

    let eliminar = carritoContent.querySelector(".delete-product");
    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
    });

       
    });
      
     const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad * 1.21, 0);
     const totalBuying = document.createElement("div");
     totalBuying.className = "total-content";
     totalBuying.innerHTML = `TOTAL A PAGAR: ${total}$`;
     modalContainer.append(totalBuying); 
    
    };
    verCarrito.addEventListener("click", menuCarrito);
    
    //UTILIZO EL METODO FIND PARA BUSCAR EL PRODUCTO QUE QUIERO ELIMINAR Y FILTER PARA FILTRAR LOS PRODUCTOS QUE NO TENGAN EL ID
    
    const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoAgregar();
    guardarLocal();
    menuCarrito();
    };
    
    const carritoAgregar = () => {
        cantidadCarrito.style.display = "block";
        cantidadCarrito.innerHTML = carrito.length;
        
        
    };
    
    //STORAGE SET ITEM, QUEDA GUARDADO EN ALMACENAMIENTO LOCAL

    const guardarLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        };
       
    //FORMULARIO

    function datos(event){
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        localStorage.setItem("su nombre es: ", nombre);
        localStorage.setItem("su correo es: ", correo);
    }
    
