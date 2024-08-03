document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/horario.jpg',
        'img/horario1.jpg',
        'img/horario2.jpg',
        'img/horario3.jpg'
    ];
    
    let currentIndex = 0;
    const elementoImg = document.getElementById('galeria-imagen');
    
    function cargarImagen(index) {
        elementoImg.src = images[index];
    }
    
    document.querySelector('.nav-button.prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        cargarImagen(currentIndex);
    });
    
    document.querySelector('.nav-button.next').addEventListener('click', function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        cargarImagen(currentIndex);
    });
    
    cargarImagen(currentIndex); 
});

//APLICAR DESCUENTO 
  const buttons = document.querySelectorAll('.card button');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const card = this.closest('.card');
          const producto = card.querySelector('p span');
          
          let precioOriginal = parseFloat(producto.textContent.trim().replace(/[^0-9.,]/g, ''));

          const descuento = 0.30;
          const precioModificado = precioOriginal - (precioOriginal * descuento);
          
          producto.textContent = precioModificado.toFixed(2);
          
          alert(`¡Descuento aplicado! El nuevo precio es $${precioModificado.toFixed(2)}`);
      });
  });