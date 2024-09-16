let lista = document.getElementById("lista");

const productos = ["Cápsulas de café Dolce Gusto x 16 cápsulas.", "Bizcochuelo Exquisita de chocolate 540g.",
     "Yogur bebible La serenísima 1100g.", "Schweppes zero pomelo 2,25 lts.",
        "Arroz largo fino 00000 Lucchetti 1 kg.", "Ades soja + jugo de manzana 1 l.", "Cerveza sin alcohol Heineken en lata 335 cc.", "Gomitas Mogul jelly buttons 1 kg.", "Galletitas crackers Argentitas 3 x 102 g.", "Yogur batido frutilla La Serenísima 120 g.", "Sopa Knorr quick sabor vegetales 5 uni.", "Cerveza rubia Patagonia 24.7 IPA 730 cc.", "Harina de trigo 000 Favorita 1kg.", "Galletitas crackers Kesitas 125 g.", "Nachos sabor a queso Doritos 40 g.", "Maní frito salado King 100 g."];

const precios = ["15020.00", "2899.00", "2850.00", "2899.00", "2400.00", "1945.00", "1550.00", "8589.00", 
    "1360.00", "650.00", "1959.00", "3750.00", "809.00", "1325.00", "1044.65", "879.00"];

const stock = [25 ,5 ,21 ,15 ,30 ,90 ,25 ,45, 8, 11, 23, 47, 3, 13, 31, 24];

const imagenes = ["img/cafe.jpg", "img/exquisita.jpg", "img/yogurt.jpg", "img/gaseosa.jpg",
    "img/arroz.jpg", "img/ades.jpg", "img/cerveza.jpg", "img/mogul.jpg",
    "img/galletitas.jpg", "img/entero.jpg", "img/sopa.jpg", "img/cervezaPatagonia.jpg",
    "img/harina.jpg", "img/kesitas.jpg", "img/doritos.jpg", "img/mani.jpg"];

    let total = 0;

    function listarProductos(arrayProductos, arrayPrecios, arrayStock, arrayImagenes) {
        for (let i = 0; i < arrayProductos.length; i++) {
          lista.innerHTML += `<li class="tamaño">
              <img src="${arrayImagenes[i]}" alt="${arrayProductos[i]}">
              <p>${arrayProductos[i]}</p> 
              <p class="precio">Precio: $${arrayPrecios[i]}</p>
              <p>Stock: <span id="stock${i}">${arrayStock[i]}</span></p>
              <input class="entrada" type="number" id="entrada${i}" placeholder="Cant."></input>
              <button id="btn${i}">Comprar</button>
              </li>`;
        }
        agregarEventos();
    }
    
    function agregarEventos() {
        for (let i = 0; i < productos.length; i++) {
          document.getElementById(`btn${i}`).addEventListener('click', () => comprar(i));
        }
        
        document.getElementById('metodoDePago').addEventListener('change', actualizarTotal);
    }
    
    function comprar(index) {
        const stockHTML = document.getElementById(`stock${index}`);
        const entradaHTML = document.getElementById(`entrada${index}`);
        let stockDisponible = parseInt(stockHTML.innerText);
        const cantidad = parseInt(entradaHTML.value);
        const precio = parseFloat(precios[index]);
    
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Ingrese una cantidad válida mayor a 0.");
            return;
        }
    
        if (cantidad <= stockDisponible) {
            total += cantidad * precio;
            stockHTML.innerText = stockDisponible - cantidad;
            entradaHTML.value = "";
            actualizarTotal();
            alert("Producto agregado");
        } else {
            alert("Cantidad no válida, revise el stock disponible.");
        }
    }
    
    function actualizarTotal() {
        let metodoPago = document.querySelector('input[name="metodoDePago"]:checked').value;
        let totalConDescuento = total;
    
        if (metodoPago === 'credito') {
            totalConDescuento *= 1.25; 
        } else if (metodoPago === 'efectivo') {
            totalConDescuento *= 0.90; 
        }
    
        document.getElementById("total").innerText = `Total: $${totalConDescuento.toFixed(2)}`;
    }
    
  listarProductos(productos, precios, stock, imagenes);