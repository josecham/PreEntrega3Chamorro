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
