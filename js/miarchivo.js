//algoritmo con condicional if else
let condition = true
let años = Number(prompt('ingrese año de nacimento: '))
while (condition) {
if (años <= 2005){
alert("Bienvenido")
condition = false
} else{
alert ("no puede ver la pagina")
años = Number(prompt('ingrese año de nacimiento: '))

}
}

//Ciclo while que de repite en hasta que se ingresa "SI"
let entrada = prompt("¿desea comprar un NFT?SI/NO");
while( entrada !== "SI" )
{
   switch (entrada) {
       case  "NO":
            alert("no puede ver la pagina");
            break;
        case  "si":
            alert("en MAYÚSCULA");
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
    
    const persona = new Persona(nombre, apellido, email, nft)
    console.log(persona)
    // const persona1 = new Persona(nombre, apellido, email, nft)
    //console.log(persona1)

//OBJETOS Simulador de Iva
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
}
const producto1 = new Producto("nft1", "2000");
const producto2 = new Producto("nft2", "2000");
const producto3 = new Producto("nft3", "2000");
const producto4 = new Producto("nft4", "2000");
const producto5 = new Producto("nft5", "2000");
const producto6 = new Producto("nft6", "2000");
const producto7 = new Producto("nft7", "2000");
const producto8 = new Producto("nft8", "2000");
const producto9 = new Producto("nft9", "2000");
const producto10 = new Producto("nft10", "2000");
const producto11= new Producto("nft11", "2000");
const producto12= new Producto("nft12", "2000");
producto1.sumaIva();
producto2.sumaIva();
producto3.sumaIva();
producto4.sumaIva();
producto5.sumaIva();
producto6.sumaIva();
producto7.sumaIva();
producto8.sumaIva();
producto9.sumaIva();
producto10.sumaIva();
producto11.sumaIva();
producto12.sumaIva();
producto1.vender();
producto5.vender();
producto8.vender();
producto12.vender();

console.log(producto1);

alert ("precio final: " + producto1.precio)