alert('Welcome to the Secret Number game');
let numeroSecreto = 5;
let chute = prompt('Choose the secret number between 1 and 30'); 

if(chute == numeroSecreto){ // Se o chute for igualzinho ao Numero Secreto, vai exibir uma mensagem.
    console.log('Congratulations! You have discovered the secret number(5)!');
}

//alert -> Vai exibir uma mensagem (It will display a message)
//let  -> uma variável que vai guardar uma informação em um espaço de memória. Obs: a variável tem que ter um nome, para podemos especificar
//prompt -> É similar com alert, porém, possui um input que permite que o usuário insiram um dado, como texto por exemplo. 
//         (It is similar to an alert, however, it has an input that allows the user to enter data, such as text.)
//console.log -> Exibe a mensagem no terminal (ferramenta desenvolvedor)