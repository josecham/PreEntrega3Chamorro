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

    const productos = [
        {id: 1, producto: 'NFT1', precio: 2000, vendido: "disponible"},
        {id: 2, producto: 'NFT2', precio: 2000, vendido: "disponible"},
        {id: 3, producto: 'NFT3', precio: 2000, vendido: "vendido"},
        {id: 4, producto: 'NFT4', precio: 2000, vendido: "disponible"},
        {id: 5, producto: 'NFT5', precio: 2000, vendido: "disponible"},
        {id: 6, producto: 'NFT6', precio: 2000, vendido: "disponible"},
        {id: 7, producto: 'NFT7', precio: 2000, vendido: "disponible"},
        {id: 8, producto: 'NFT8', precio: 2000, vendido: "disponible"},
        {id: 9, producto: 'NFT9', precio: 2000, vendido: "disponible"},
        {id: 10, producto: 'NFT10', precio: 2000, vendido: "disponible"},
        {id: 11, producto: 'NFT11', precio: 2000, vendido: "disponible"},
        {id: 12, producto: 'NFT12', precio: 2000, vendido: "disponible"}
    ]
        const buscado = productos.find(producto => producto.id == nft ); 
        console.log(buscado);
    
    alert("NOMBRE= " + buscado.producto);
    alert("PRECIO FINAL + IVA= "+ buscado.precio * 1.21);
    alert("STOCK= "+ buscado.vendido.toLocaleUpperCase());
    

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