//constructor Date dias que se mantiene la oferta redondeado hacia abajo con Math.floor
const promocion = new Date("July 14, 2023")
const hoy = (new Date())

const milisegundosPorDia = 86400000

console.log( Math.floor((promocion - hoy ) / milisegundosPorDia) )

alert("Promoción Valida por " +  Math.floor((promocion - hoy ) / milisegundosPorDia) + "dias" )

//los dias que restan de la promocion visualizado en la pagina con queryselector 
let promocion1 = document.querySelector("#promo");
promocion1.innerHTML = "Promoción Valida por " +  Math.floor((promocion - hoy ) / milisegundosPorDia) + "dias";
promocion1.style.background = "lightgreen";
promocion1.style.color = "black";
promocion1.style.borderRadius = "4px";

//algoritmo con condicional if else
let condition = true
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
            alert("ERROR"); 
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

    //DOOM usando id
    let elementoPorId1 = document.getElementById("precio1");
    elementoPorId1.innerHTML = "$ 2500";
    let elementos = document.getElementById("stock1");
    elementos.innerHTML = "Disponible";
    elementos.style.background = "lightgreen";
    elementos.style.color = "black";
    elementos.style.borderRadius = "4px";

    let elementoPorId2 = document.getElementById("precio2");
    elementoPorId2.innerHTML = "$ 2000";
    let elementos2 = document.getElementById("stock2");
    elementos2.innerHTML = "Disponible";
    elementos2.style.background = "lightgreen";
    elementos2.style.color = "black";
    elementos2.style.borderRadius = "4px";

    let elementoPorId3 = document.getElementById("precio3");
    elementoPorId3.innerHTML = "$ 2000";
    let elementos3 = document.getElementById("stock3");
    elementos3.innerHTML = "Vendido";
    elementos3.style.background = "#ffcccb";
    elementos3.style.color = "black";
    elementos3.style.borderRadius = "4px";

    let elementoPorId4 = document.getElementById("precio4");
    elementoPorId4.innerHTML = "$ 2000";
    let elementos4 = document.getElementById("stock4");
    elementos4.innerHTML = "Disponible";
    elementos4.style.background = "lightgreen";
    elementos4.style.color = "black";
    elementos4.style.borderRadius = "4px";

    let elementoPorId5 = document.getElementById("precio5");
    elementoPorId5.innerHTML = "$ 2100";
    let elementos5 = document.getElementById("stock5");
    elementos5.innerHTML = "Disponible";
    elementos5.style.background = "lightgreen";
    elementos5.style.color = "black";
    elementos5.style.borderRadius = "4px";

    let elementoPorId6 = document.getElementById("precio6");
    elementoPorId6.innerHTML = "$ 2100";
    let elementos6 = document.getElementById("stock6");
    elementos6.innerHTML = "Disponible";
    elementos6.style.background = "lightgreen";
    elementos6.style.color = "black";
    elementos6.style.borderRadius = "4px";

    let elementoPorId7 = document.getElementById("precio7");
    elementoPorId7.innerHTML = "$ 2100";
    let elementos7 = document.getElementById("stock7");
    elementos7.innerHTML = "Disponible";
    elementos7.style.background = "lightgreen";
    elementos7.style.color = "black";
    elementos7.style.borderRadius = "4px";

    let elementoPorId8 = document.getElementById("precio8");
    elementoPorId8.innerHTML = "$ 2200";
    let elementos8 = document.getElementById("stock8");
    elementos8.innerHTML = "Disponible";
    elementos8.style.background = "lightgreen";
    elementos8.style.color = "black";
    elementos8.style.borderRadius = "4px";

    let elementoPorId9 = document.getElementById("precio9");
    elementoPorId9.innerHTML = "$ 2200";
    let elementos9 = document.getElementById("stock9");
    elementos9.innerHTML = "Disponible";
    elementos9.style.background = "lightgreen";
    elementos9.style.color = "black";
    elementos9.style.borderRadius = "4px";

    let elementoPorId10 = document.getElementById("precio10");
    elementoPorId10.innerHTML = "$ 2200";
    let elementos10 = document.getElementById("stock10");
    elementos10.innerHTML = "Disponible";
    elementos10.style.background = "lightgreen";
    elementos10.style.color = "black";
    elementos10.style.borderRadius = "4px";

    let elementoPorId11 = document.getElementById("precio11");
    elementoPorId11.innerHTML = "$ 2300";
    let elementos11 = document.getElementById("stock11");
    elementos11.innerHTML = "Disponible";
    elementos11.style.background = "lightgreen";
    elementos11.style.color = "black";
    elementos11.style.borderRadius = "4px";

    let elementoPorId12 = document.getElementById("precio12");
    elementoPorId12.innerHTML = "$ 2300";
    let elementos12 = document.getElementById("stock12");
    elementos12.innerHTML = "Disponible";
    elementos12.style.background = "lightgreen";
    elementos12.style.color = "black";
    elementos12.style.borderRadius = "4px";

    //MODIFICAR NODO
    let modificado = document.querySelector ("#precio1");
    modificado.textContent = "$ 3025";

    //DOOM carrito usando querySelector
    let elementoPorId1c = document.querySelector("#precio1c");
    elementoPorId1c.innerHTML = "$ 2500";
    let elementosc = document.querySelector("#stock1c");
    elementosc.innerHTML = "Disponible";
    elementosc.style.background = "lightgreen";
    elementosc.style.color = "black";
    elementosc.style.borderRadius = "4px";

    let elementoPorId2c = document.querySelector("#precio2c");
    elementoPorId2c.innerHTML = "$ 2000";
    let elementos2c = document.querySelector("#stock2c");
    elementos2c.innerHTML = "Disponible";
    elementos2c.style.background = "lightgreen";
    elementos2c.style.color = "black";
    elementos2c.style.borderRadius = "4px";

    let elementoPorId3c = document.querySelector("#precio3c");
    elementoPorId3c.innerHTML = "$ 2000";
    let elementos3c = document.querySelector("#stock3c");
    elementos3c.innerHTML = "Vendido";
    elementos3c.style.background = "#ffcccb";
    elementos3c.style.color = "black";
    elementos3c.style.borderRadius = "4px";

    let elementoPorId4c = document.querySelector("#precio4c");
    elementoPorId4c.innerHTML = "$ 2000";
    let elementos4c = document.querySelector("#stock4c");
    elementos4c.innerHTML = "Disponible";
    elementos4c.style.background = "lightgreen";
    elementos4c.style.color = "black";
    elementos4c.style.borderRadius = "4px";

    let elementoPorId5c = document.querySelector("#precio5c");
    elementoPorId5c.innerHTML = "$ 2100";
    let elementos5c = document.querySelector("#stock5c");
    elementos5c.innerHTML = "Disponible";
    elementos5c.style.background = "lightgreen";
    elementos5c.style.color = "black";
    elementos5c.style.borderRadius = "4px";

    let elementoPorId6c = document.querySelector("#precio6c");
    elementoPorId6c.innerHTML = "$ 2100";
    let elementos6c = document.querySelector("#stock6c");
    elementos6c.innerHTML = "Disponible";
    elementos6c.style.background = "lightgreen";
    elementos6c.style.color = "black";
    elementos6c.style.borderRadius = "4px";

    let elementoPorId7c = document.querySelector("#precio7c");
    elementoPorId7c.innerHTML = "$ 2100";
    let elementos7c = document.querySelector("#stock7c");
    elementos7c.innerHTML = "Disponible";
    elementos7c.style.background = "lightgreen";
    elementos7c.style.color = "black";
    elementos7c.style.borderRadius = "4px";

    let elementoPorId8c = document.querySelector("#precio8c");
    elementoPorId8c.innerHTML = "$ 2200";
    let elementos8c = document.querySelector("#stock8c");
    elementos8c.innerHTML = "Disponible";
    elementos8c.style.background = "lightgreen";
    elementos8c.style.color = "black";
    elementos8c.style.borderRadius = "4px";

    let elementoPorId9c = document.querySelector("#precio9c");
    elementoPorId9c.innerHTML = "$ 2200";
    let elementos9c = document.querySelector("#stock9c");
    elementos9c.innerHTML = "Disponible";
    elementos9c.style.background = "lightgreen";
    elementos9c.style.color = "black";
    elementos9c.style.borderRadius = "4px";

    let elementoPorId10c = document.querySelector("#precio10c");
    elementoPorId10c.innerHTML = "$ 2200";
    let elementos10c = document.querySelector("#stock10c");
    elementos10c.innerHTML = "Disponible";
    elementos10c.style.background = "lightgreen";
    elementos10c.style.color = "black";
    elementos10c.style.borderRadius = "4px";

    let elementoPorId11c = document.querySelector("#precio11c");
    elementoPorId11c.innerHTML = "$ 2300";
    let elementos11c = document.querySelector("#stock11c");
    elementos11c.innerHTML = "Disponible";
    elementos11c.style.background = "lightgreen";
    elementos11c.style.color = "black";
    elementos11c.style.borderRadius = "4px";

    let elementoPorId12c = document.querySelector("#precio12c");
    elementoPorId12c.innerHTML = "$ 2300";
    let elementos12c = document.querySelector("#stock12c");
    elementos12c.innerHTML = "Disponible";
    elementos12c.style.background = "lightgreen";
    elementos12c.style.color = "black";
    elementos12c.style.borderRadius = "4px";