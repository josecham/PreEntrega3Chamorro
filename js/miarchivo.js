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

//Ciclo while que de repite en hasta que se ingresa el si
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
//FUNCION Constructoras para completar los datos del usuario (Pascalcase string)
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
    // const persona1 = new Persona(nombre, apellido, email, nft)
    //console.log(persona1)

    //OBJETO y ARRAY

    class Producto {
        constructor(nombre, precio) {
            this.nombre  = nombre.toUpperCase();
            this.precio  = parseFloat(precio);
            this.vendido = false;
        }
        sumaIva() {
            this.precio = this.precio * 1.21;
        }
        vender() {
            this.vendido = true;
        }
    }const productos = [];
    productos.push(new Producto("nft1", "2000"));
    productos.push(new Producto("nft2", "2000"));
    productos.push(new Producto("nft3", "2000"));
    productos.push(new Producto("nft4", "2000"));
    productos.push(new Producto("nft5", "2000"));
    productos.push(new Producto("nft6", "2000"));
    productos.push(new Producto("nft7", "2000"));
    productos.push(new Producto("nft8", "2000"));
    productos.push(new Producto("nft9", "2000"));
    productos.push(new Producto("nft10", "2000"));
    productos.push(new Producto("nft11", "2000"));
    productos.push(new Producto("nft12", "2000"));

    //para sumarle el iva
    for (const producto of productos)
        producto.sumaIva();
    
    console.log(productos)
 
    //Agregue la funcion vender para que me modifique el producto vendido a true
    //for (const producto of productos)
    //producto.vender();
    //console.log(productos)

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
             
            alert("Muchas Gracias!! solo resta completar el formulario para efectuar la compra")
        
        }
        
        saludar()   