//FORMULARIO

function datos(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    localStorage.setItem("su nombre es: ", nombre);
    localStorage.setItem("su correo es: ", correo);
}

//LIBRERIA SWEET ALERT

const btn = document.querySelector('#mibtn')
btn.addEventListener('click', () => {

Swal.fire({
    title: 'Enviado con éxito!',
    text: 'Nos contactaremos a la brevedad!',
    imageUrl: 'https://www.bloomberglinea.com/resizer/8cm8iWe_m7-OEQq3-sS2jIqn29w=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/TQX6LXZYENDZHBWKGRMPCZDAHE.jpg',
    imageWidth: 400,
    imageHeight: 200,
    icon: 'success',
    width: 280,
    height: 590,
    confirmButtonText: 'Gracias!'
})
})