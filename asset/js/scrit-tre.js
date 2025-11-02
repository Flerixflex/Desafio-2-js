const select1 =document.querySelector('#password1');
const select2 =document.querySelector('#password2');
const select3 =document.querySelector('#password3');
const button =document.querySelector('#boton')
const resultado =document.querySelector('#resultado')
const pass1 = '911'
const pass2 = '714'

button.addEventListener('click',() => {
    const valor = select1.value + select2.value + select3.value;
    if (valor === pass1) { resultado.textContent = 'password 1 correcta';  
    } else if (valor === pass2) { resultado.textContent = 'password 2 correcta';}
    else {resultado.textContent = 'password incorrecta ';  
    }
    });

