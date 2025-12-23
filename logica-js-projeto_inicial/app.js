alert('Welcome to the Secret Number game');
let secretNumber = 5;
console.log(secretNumber);
let kick; 
let tentativas = 1;

//enquanto o chute não for igual ao numero secreto
while (kick != secretNumber) {
    kick = prompt('Choose the secret number between 1 and 10');

    // Se o kick for igualzinho ao Secret Number, caso a contição for verdadeira, vai exibir uma mensagem. Senão for igual, vai exibir outra mensagem.
    if (kick == secretNumber){ //Se (True) 
        alert(`Congratulations! You have discovered the secret number: ${secretNumber} with ${tentativas}!`); 
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



//alert -> Vai exibir uma mensagem (It will display a message)
//let  -> uma variável que vai guardar uma informação em um espaço de memória. Obs: a variável tem que ter um nome, para podemos especificar
//prompt -> É similar com alert, porém, possui um input que permite que o usuário insiram um dado, como texto por exemplo. 
//         (It is similar to an alert, however, it has an input that allows the user to enter data, such as text.)
//console.log -> Exibe a mensagem no terminal (ferramenta desenvolvedor) 
//              (Display the message in the terminal)
//template string -> &{} ou "+" usado serve como uma alternativa ao `-> template de strings já apresentado para realizarmos concatenação de strings/caracteres/valores de varíaveis no JavaScript.