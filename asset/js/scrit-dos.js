const inputs = document.querySelectorAll('.boxes input[type="number"]');
const button = document.querySelector('button');
const mensaje = document.querySelector('.box h3:nth-of-type(2)');

button.addEventListener('click',() => {
    //sumar los valores de los 3 inputs
    const total = Array.from(inputs).reduce((acc,input) => acc + Number(input.value),0);
    //verificar el total
    if (total <= 10) {
        mensaje.textContent = `Llevas ${total} stickers`;

    } else {
        mensaje.textContent = 'Llevas demasiados stikers';
    }
});