class GestionarProductos {

    iniciar(){
     productos= [
         {   "id": 1,
             "estampa": 'Harry Styles',
             "precio": 2000,
            //  "talles": ['s', 'm', 'l', 'xl', 'xxl'],
            //  "color": ['Blanco', 'Negro'],
             "imagen": "../assets/img/harry styles.png",
             "stock": 20,
             "destacado": 1
         },
         {   "id": 2,
             "estampa": 'Selena Quintanilla',
             "precio": 1900,
            //  "talles": ['m', 'l', 'xl', 'xxl'],
            //  "color": ['Blanco', 'Negro'],
             "imagen": "../assets/img/selena-q.png",
             "stock": 15,
             "destacado": 1
         },
         {   "id": 3,
             "estampa": 'Justin Bieber',
             "precio": 1900,
            //  "talles": ['s', 'm', 'l'],
            //  "color": ['Blanco', 'Negro'],
             "imagen": "../assets/img/justin.png",
             "stock": 30,
             "destacado": 1
         },
         {   "id": 4,
             "estampa": 'Alex Turner',
             "precio": 1700,
            //  "talles": ['s', 'm', 'l'],
            //  "color": ['Blanco', 'Negro'],
             "imagen": "../assets/img/alex-turner.png",
             "stock": 10,
             "destacado": 1
         },
         {   "id": 5, 
             "estampa": 'Paramore',
             "precio": 1800,
            //  "talles": ['s', 'l', 'xl'],
            //  "color": ['Blanco', 'Negro'],
             "imagen": "../assets/img/paramore.png",
             "stock": 8,
             "destacado": 1
         },
         {   "id": 6,
             "estampa": 'El viaje de Chihiro',
             "precio": 1800,
            //  "talles": ['s', 'm', 'l', 'xl', 'xxl'],
            //  "color": ['Blanco', 'Negro'],
             "imagen": "../assets/img/chihiro.png",
             "stock": 14,
             "destacado": 1
         },
         {   "id": 7,
             "estampa": 'Vis a vis',
             "precio": 1700,
            //  "talles": ['m', 'l', 'xl'], 
            //  "color": ['Blanco', 'Negro'], 
             "imagen": "../assets/img/vis-a-vis.png",
             "stock": 11,
             "destacado": 1
         },
         {   "id": 8, 
             "estampa": 'Sherlock Holmes', 
             "precio": 1900, 
            //  "talles": ['s', 'm', 'l', 'xl'], 
            //  "color": ['Blanco', 'Negro'], 
             "imagen": "../assets/img/sherlock.png",
             "stock": 22,
             "destacado": 1
         },
         {   "id": 9, 
             "estampa": 'The Walking Dead', 
             "precio": 1700, 
            //  "talles": ['s', 'm', 'l', 'xxl'], 
            //  "color": ['Blanco', 'Negro'], 
             "imagen": "../assets/img/twd.png",
             "stock": 20,
             "destacado": 1
         },
         {   "id": 10, 
             "estampa": 'Gatos Ying & Yan', 
             "precio": 2100, 
            //  "talles": ['s', 'm', 'xl', 'xxl'], 
            //  "color2": ['Blanco', 'Negro'], 
             "imagen": "../assets/img/gatitoying.png",
             "stock": 36,
             "destacado": 1
         },
         {   "id": 11, 
             "estampa": 'Corazón Tradicional', 
             "precio": 2000, 
            //  "talles": ['m', 'l', 'xl', 'xxl'], 
            //  "color": ['Blanco', 'Negro'], 
             "imagen": "../assets/img/corazon.png",
             "stock": 39,
             "destacado": 1
         },
         {   "id": 12, 
             "estampa": 'Gato #NotToday', 
             "precio": 1900, 
            //  "talles": ['s', 'm', 'l', 'xxl'], 
            //  "color": ['Blanco', 'Negro'], 
             "imagen": "../assets/img/gatito.png",
             "stock": 21,
             "destacado": 1
         },
     ]
      
     let productosDestacados= productos.filter(prod => prod.destacado == 1)
 
     this.cargarProductos(productosDestacados);
     this.mostrarCarrito();
     this.actualizarContador();
 
    } 
 
    cargarProductos(productos) {
        const divProductos= document.querySelector("#productos");
        divProductos.innerHTML = "" ;

        if(productos.length === 0){
            this.mostrarHeader("No hay productos seleccionados");
        }else{
            productos.forEach(producto => {
                let prod= document.createElement("div");
                prod.classList.add('col-12', 'h200', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-fila', 'producto');
                prod.setAttribute("id","row_"+producto.id);

                prod.innerHTML= `
                <div class="col">
                    <div class="card" id="remera_${producto.id}">
                        <img src="${producto.imagen}" class="card-img-top" alt="Remera de ${producto.estampa}">
                        <div class="card-body">
                            <h3>${producto.estampa}</h3>
                            <h5 class="precio">$${producto.precio}</h5>
                            <div class="button">
                            <a href="javascript:addCarrito(${producto.id})" class="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>`;


                divProductos.appendChild(prod);
            });
        }
    }

    addCard(infoProducto) {
        const existe = carrito.some( producto => producto.id === infoProducto.id );
        if(existe) {
            const articulos = carrito.map( producto => {
                if(producto.id === infoProducto.id)
                {
                    producto.cantidad++;
                    return producto;
                }
                else
                {
                    return producto;
                }
                carrito = articulos;               
            })
                alert("Se actulizo la cantidad del producto");
        }
        else 
        {
            carrito.push(infoProducto);
            alert("Se agrego el producto");
        }
    }
    contarProductos() {
            let contadorProductos= 0;
            carrito.forEach((producto) =>{
                contadorProductos += parseInt(producto.cantidad);
            })

            return contadorProductos;
    }

    actualizarCarrito(){
        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();
    }

    actualizarContador() { 
        let totalArticulos = this.contarProductos();
        let countCarrito = document.querySelector('#badgeCarrito');

        countCarrito.innerHTML = totalArticulos;
    }

    

    mostrarCarrito() { 

        let detalleCarrito = document.querySelector('#idCarrito');
        detalleCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach( ( producto ) => {
            const row = document.createElement('div');
            row.classList.add('row');
            
            total += parseInt(producto.precio);

            row.innerHTML = `
                
                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                <img src="${producto.imagen}" width="80">
                            </div>

                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                ${producto.estampa}
                            </div>

                            <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                                $ ${producto.precio}
                            </div>

                            <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                                ${producto.cantidad}
                            </div>

                            <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                                <a href="javascript:eliminar(${producto.id})">
                                    <i class="fa-solid fa-square-minus fa-2x"></i>
                                </a>
                            </div>`;

            detalleCarrito.appendChild(row);
        })

        
        let row = document.createElement('div');
        row.classList.add('row');
        
        row.innerHTML = `   <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                                Total a pagar:
                            </div>
                            <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                                <b> $ ${total}</b>
                            </div>`;

        
        detalleCarrito.appendChild(row);
    }

    eliminarArticulo(id) { 

        let resp = confirm("Esta seguro de eliminar el producto?")
        if (resp)  {
            carrito = carrito.filter( producto => producto.id != id);
            this.actualizarCarrito();

            alert("El articulo fue eliminado del carrito");

        }            
    
    }

    guardarCarrito(){
        localStorage.setItem('carrito', JSON.stringify( carrito )); 
    }

    mostrarHeader(mensaje){
        const headerProductos = document.querySelector("#headerProductos");
        headerProductos.innerHTML= mensaje;
    }
 }