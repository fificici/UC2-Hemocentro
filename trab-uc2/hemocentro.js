let cadastrados = []


function menu() {
    console.log(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n 1. Cadastrar doador\n 2. Listar doadores\n 3. Buscar doador por tipo sanguíneo\n 4. Buscar doador por data da última doação\n 5. Sair `)
}

const readlineSync = require('readline-sync');

function cadastro() {

    let cadPergunta1 = readlineSync.question('Insira seu nome: ')
    let cadPergunta2 = readlineSync.question('Insira sua idade: ')
    let cadPergunta3 = readlineSync.question('Insira seu peso: ')
    let cadPergunta4 = readlineSync.question('Insira seu tipo sanguineo: ')
    let cadPergunta5 = readlineSync.question('Insira a data da sua ultima doacao no modelo dd/mm/aaaa: ')

    let objUsuario = {
        Nome: cadPergunta1.toUpperCase(),
        Idade: cadPergunta2,
        Peso: cadPergunta3,
        Tipo: cadPergunta4.toUpperCase(),
        Data: cadPergunta5
    }

    cadastrados.push(objUsuario)
}

function listagem() {
    
    console.log('--------------------')
    console.log('LISTAGEM DE DOADORES:')
    console.log('--------------------')
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO')

    for(i = 0; i <= cadastrados.length; i ++) {
        const usuario = cadastrados[i]
        console.log(`${usuario.Nome}, ${usuario.Idade}, ${usuario.Peso}, ${usuario.Tipo}, ${usuario.Data}`)
    }
    
}

function escolha(opcao) {
    switch (opcao) {

        case '1':

            console.log("Cadastro de Doador");

            cadastro()

            break;

        case '2':

            console.log("Lista de Doadores")

            listagem()

            break;

        case '3':

            console.log("Buscar Doador por Tipo Sanguíneo");

            break;

        case '4':

            console.log("Encerrando o programa...");
           
            return true; 

        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
    return false; 
}

function main() {
    let encerrar = false;

    while (!encerrar) {
        menu();
        let opcao = readlineSync.question("Escolha uma opcao: ");
        encerrar = escolha(opcao);
    }
}

main()