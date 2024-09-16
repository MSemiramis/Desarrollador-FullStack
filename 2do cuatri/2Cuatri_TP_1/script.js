function solicitudConApi(url){
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no encontrada');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        throw error; 
    });
}

async function obtenerProducto(url) {
    try {
        const data = await solicitudConApi(url);
        return data; 
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    return []; 
    }
}

function mostrarProductos(productos){
    const contenedorProducto = document.getElementById('container-productos');
    if (!contenedorProducto){
        console.error('No se encontro ese producto');
        return;
    }

    contenedorProducto.innerHTML= productos.map(producto =>`
        <div class="card">
            <img src="${producto.image}" alt="${producto.title}"style="width: 100%; height: 150px; object-fit: cover;">
            <div class="card-body">
                <h2>${producto.title}</h2>
                <p>Precio: $${producto.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', async () => {
    const urlApi = 'https://fakestoreapi.com/products'; 
    const productos = await obtenerProducto(urlApi);

    mostrarProductos(productos.slice(0, 10));
});
