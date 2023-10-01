    //constructor Date dias que se mantiene la oferta redondeado hacia abajo con Math.floor
    const promocion = new Date("December 31, 2023")
    const hoy = (new Date())

    const milisegundosPorDia = 86400000

    //los dias que restan de la promocion visualizado en la pagina con queryselector 
    let promocion1 = document.querySelector("#promo");
    promocion1.innerHTML = "Promoción Valida por " +  Math.floor((promocion - hoy ) / milisegundosPorDia) + " dias";
    promocion1.style.background = "lightgreen";
    promocion1.style.color = "black";
    promocion1.style.borderRadius = "4px";


    //CAPTURA DEL ID A JS

    const shopContent  = document.getElementById("shopContent");
    const verCarrito = document.getElementById("verCarrito");
    const modalContainer = document.getElementById("modal-container");
    const cantidadCarrito = document.getElementById("cantidadCarrito");

    //DOM METODOS DE ACCESO A LOS NODOS, DEFINIMOS EL INNERHTML Y AGREGAMOS EL CONTENEDOR CON APPEND AL BODY
    //OPERADOR LOGICO OR USANDO GETITEM, SI EXISTE EN EL LOCALSTORAGE SE LO ASIGNA AL CARRITO SINO ARRAY VACIO

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    //METODO FETCH() DENTRO DE LA FUNCION ASINCRONA APLICANDO ASYNC AWAIT 

    const getProducts = async () => {
    const response = await fetch("datos.json");
    const datos = await response.json();
    console.log(datos);
    
    //TENEMOS QUE RECORRER EL CARRITO CON FOR EACH, CREAR UN DIV Y ELEMENTOS HTML QUE INCORPORO AL DIV

    datos.forEach((product) =>
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
        carritoAgregar();
        guardarLocal();
    }); 
    });
    

    };
    getProducts();


    
    
    //STORAGE SET ITEM, QUEDA GUARDADO EN ALMACENAMIENTO LOCAL

    const guardarLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        };
       
    