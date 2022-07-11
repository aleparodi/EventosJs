class Productos {
    constructor(nombre, marca , precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}
const producto= []
 const form = document.getElementById('idForm')
 const divProductos = document.getElementById('divProductos')
 
 form.addEventListener('submit', (e) =>{
     e.preventDefault()
     let nombre = document.getElementById('idNombre').value
     let marca = document.getElementById('idMarca').value
     let precio = parseFloat(document.getElementById('idPrecio').value)
     let stock = parseInt(document.getElementById('idStock').value)
      const productos = new Productos(nombre, marca, precio, stock)
      producto.push(productos)
      console.log(producto)
      form.reset()
})
document.getElementById('botonProductos').addEventListener('click', ()=> {
producto.forEach(productos => {
    divProductos.innerHTML += `
    <div class="card" style= "width: 18rem; margin: 4px;"> 
      <div class="card-body">
       <h5 class="card-title">${productos.nombre}</h5>
       <p class="card-text">Marca: ${productos.marca}</p>
       <p class="card-text">$${productos.precio}</p>
       <p class="card-text">Stock: ${productos.stock}</p>
       <button class="btn btn-danger">Eliminar</button>
    </div>
  </div>
 `    
  
});     
})

