//VARIÁVEIS
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10);
let attempts = 1

//função de aplicar tentativa
function handleTryClick (event) {
    event.preventDefault() //o evento passado como argumento recerá o metódo que retira a reação padrão, no caso do button ele por está dentro de um form por padrão ele vai tentar enviar o furmulario e recarregar a pagina
    
    const inputNumber = document.querySelector('#inputNumber')
    
    if (0 <= Number(inputNumber.value) <= 10 && inputNumber.value != ' ' ){
        if(Number(inputNumber.value) == randomNumber) {
            screen1.classList.add('hide');
            screen2.classList.remove('hide');
    
            document.querySelector('.screen2 h2').innerText = `Acertou em ${attempts} tentativas`
        }
        
        inputNumber.value = ' '
    
        attempts++
    }
}

function handleResetClick () {
    screen1.classList.remove('hide');
    screen2.classList.add('hide');

    attempts = 1

    randomNumber =  Math.round(Math.random() * 10)
}

function handleResetEnter (e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

//eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

