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
 
 //TENEMOS QUE RECORRER EL CARRITO CON FOR EACH

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
//A MODALCONTENT LE AGREGAMOS TODO LO QUE ESTE DENTRO DE CARRITO CONTENT
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