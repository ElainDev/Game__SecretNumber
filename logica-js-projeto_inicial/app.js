alert('Welcome to the Secret Number game');
let maxNumber = 5000;
let secretNumber = parseInt(Math.random() * maxNumber + 1); //Coloca "+ 1", para incluir o 10, assim, gerando um número entre 1 e 100, sem ele ficaria de 0 a 99
console.log(secretNumber);
let kick; 
let tentativas = 1;

//enquanto o chute não for igual ao numero secreto
while (kick != secretNumber) {
    kick = prompt(`Choose the secret number between 1 and ${maxNumber}`);

    // Se o kick for igualzinho ao Secret Number, caso a contição for verdadeira, vai exibir uma mensagem. Senão for igual, vai exibir outra mensagem.
    if (kick == secretNumber){ //Se (True)
        break; 
    } else { //senão (false)                                                                
        if (kick > secretNumber) {
            alert(`The secret number is less than ${kick}`);
        } else {
            alert (`The secret number is greater than ${kick}`)
        }
        //tentativas = tentativas +1;
        tentativas++;
    }
}

//operador ternário
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Congratulations! You have discovered the secret number: ${secretNumber} with ${tentativas} ${palavratentativa}!`)
/*

if(tentativas > 1){
    alert(`Congratulations! You have discovered the secret number: ${secretNumber} with ${tentativas} tentativas!`);
} else {
    alert(`Congratulations! You have discovered the secret number: ${secretNumber} with ${tentativas} tentativa!`);
}
*/