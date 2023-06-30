
class Producto{
  constructor(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;

  }
}

class ProductoAlmacen extends Producto{
  constructor(nombre,img,descripcion,precio){
    super(nombre,precio);
    this.img=img;
    this.descripcion=descripcion;
  }
}

class ProductosAlmacen{
  constructor(){
    this.productos = [];
  }
  addProducto(producto){
    this.productos.push(producto);
  }
  getProductos(){
    return this.productos;
  }
}

class ProductoCarrito{
  constructor(nombre,precio,cantidad){
    this.nombre=nombre;
    this.img=img;
    this.descripcion=descripcion;
    this.precio=precio;
  }
}


class CarritoDeCompras{
  constructor(){
    this.carrito = [];
  }
  
  addProductoCarrito(producto){
    this.productos.push(producto);
  }
  //
  editCantProducto(index,producto){
    this.productos.splice(index,1,producto);
  }
  removeProducto(index){
    this.productos.splice(index,1);
  }

  getProductosCarrito(){
    return this.carrito;
  }
}

const productosAlmacen = new ProductosAlmacen();

productosAlmacen.addProducto(new ProductoAlmacen("Tri Bot Robot de Aprendizaje",
"https://pepeganga.vtexassets.com/arquivos/ids/666563/100343866-1.png?v=637737938490530000",
"El Tori Bot Robot de Aprendizaje 4 en 1 de Fisher Price es un amiguito de juegos que se transforma para que los bebés se diviertan con las 4 maneras de juego y las entretenidas canciones, luces y actividades prácticas.",
300000));

productosAlmacen.addProducto(new ProductoAlmacen("Casa de los Sueños de Barbie - Fisher Price",
"https://pepeganga.vtexassets.com/arquivos/ids/829588/100711075-1.png?v=638023148105470000",
"Con 3 pisos de juegos, esta casa de juguete está cargada de diversión práctica, incluido un ascensor que se mueve, un armario de ropa giratorio y una piscina iluminada con tobogán",
340000));

productosAlmacen.addProducto(new ProductoAlmacen("Pista Anti-Gravity Slot Track - Hot Wheels",
"https://pepeganga.vtexassets.com/arquivos/ids/832199/100458020-1.png?v=638028359622430000",
"La pista de juguete Anti-Gravity Slot Track, incluye 2 mini vehículos 2 controladores inalámbricos y contador de vueltas.",280000))



//Elementos del DOM
const $productosTabla =  document.getElementById("productos");


//AddEventListener


//Funciones
generarIdUnico = () => { 
  return Math.random().toString(30).substring(2);           
} 
function renderProductosTabla(){
  $productosTabla.innerHTML=" ";
  const productos = productosAlmacen.getProductos();

  productos.forEach((e,index)=>{
    const {nombre,img,descripcion,precio} = e;

    let html = `<tr>
                  <td>
                    <div class="producto">
                      <img src="${img}" class="imgProducts" alt="...">
                      <p>${nombre}</p>
                    </div>

                  </td>
                  <td>${descripcion}</td>
                  <td>$${precio}</td>
                  <td>
                    <div class="btnIncrementar">
                      <button id="btn-menos" onclick="decrementar(${index})">-</button>
                      <p id="${index}">1</p>
                      <button id="btn-mas" onclick="incrementar(${index})">+</button>
                    </div> 
                    
                  </td>
                  <td>
                    <button type="button" class="btn btn-success carrito" onclick="agregarAlCarrito(${index})">
                      <i class="bi bi-cart4"></i>
                    </button>
                  </td>
                </tr>`; 

    $productosTabla.insertAdjacentHTML('beforeend',html);
  })
}
renderProductosTabla();

function incrementar(index){
  let $cajaCantidad = document.getElementById(index);
  let cantidad = Number($cajaCantidad.textContent)
  $cajaCantidad.textContent =  cantidad+1;
}
function decrementar(index){
  let $cajaCantidad = document.getElementById(index);
  let cantidad = Number($cajaCantidad.textContent)
  if(cantidad !=1){
    $cajaCantidad.textContent =  cantidad-1;
  }
}

function agregarAlCarrito(index){
  let $cajaCantidad = document.getElementById(index);

};

// Obtener los elementos del carrito del Local Storage al cargar la página
/*var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function mostrarCarrito() {
  var cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = document.createElement('li');
    cartItem.textContent = cartItems[i];
    cartItemsList.appendChild(cartItem);
  }
}

function agregarAlCarrito() {
  var item = document.getElementById('compraInput').value;
  if (item){
    cartItems.push(item);
    mostrarCarrito();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

}

function vaciarCarrito() {
  cartItems = [];
  mostrarCarrito();
  localStorage.removeItem('cartItems');
}

mostrarCarrito();*/