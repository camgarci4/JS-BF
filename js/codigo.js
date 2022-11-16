let carrito= [];
let productos= [];
let gestor;
const claveCarrito= "carrito";

//cuando todo este ok se ejecuta este bloque de codigo
document.addEventListener("DOMContentLoaded",()=>{
    carrito= JSON.parse(localStorage.getItem("carrito")) || [];

    gestor= new GestionarProductos();
    gestor.iniciar();

});


function addCarrito(id){
let prod = document.querySelector("#row_"+id);
let producto = new Producto (id,
                            prod.querySelector("h3").textContent,
                            prod.querySelector(".precio").textContent.substring(1,6),
                            prod.querySelector("img").scr
                            );

gestor.addCard(producto);
}

function eliminar(id){
    gestor.eliminarArticulo(id);
}



//boton dark
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    //operador ternario
    localStorage.setItem('dark-mode', document.body.classList.contains('dark') ? 'true' : 'false')
});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}