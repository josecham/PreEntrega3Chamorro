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


    //CAPTURA DEL ID EN JS

    const shopContent  = document.getElementById("shopContent");
    const verCarrito = document.getElementById("verCarrito");
    const modalContainer = document.getElementById("modal-container");
    const cantidadCarrito = document.getElementById("cantidadCarrito");

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
    
